<?php

namespace Naif\ChatgptSeeder\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Schema;
use Laravel\Nova\Http\Requests\NovaRequest;

class ChatGPTSeederController extends Controller
{
    public function tables()
    {
        $tables_list = [];
        $tables = Schema::getAllTables();

        foreach ($tables as $table){
            $table = json_decode(json_encode($table),true);
            $table = array_values($table);
            $tables_list[] = $table[0];
        }
        return response()->json([
            'tables' => $tables_list
        ]);
    }

    public function getColumns($table_name)
    {
        try {
            $columns = Schema::getColumnListing($table_name);
            $connection = DB::connection();
            $columns_list = [];
            $index = 0;

            foreach ($columns as $column_name) {
                $column = $connection->getDoctrineColumn($table_name, $column_name);
                if (!in_array($column->getName(), ['id', 'created_at', 'updated_at', 'deleted_at'])) {
                    $columns_list[$index] =
                        [
                            'column_name' => $column_name,
                            'column_type' => $column->getType()->getName(),
                            'column_length' => $column->getLength(),
                            'column_not_nullable' => $column->getNotnull(),
                            'column_default' => $column->getDefault(),
                        ];
                    $index++;
                }
            }
            return response()->json([
                'columns' => $columns_list
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'exception' => true,
                'exception_message' => $e->getMessage(),
            ]);
        }
    }

    public function generate(NovaRequest $request)
    {
        try {
            $columns = $this->getColumns($request->database_table);
            $columns = json_decode($columns->content(), true);

            $not_nullable_columns = array_filter($columns['columns'], function ($item) {
                return $item['column_not_nullable'] == true;
            });

            $not_nullable_columns = array_column($not_nullable_columns, 'column_name');

            $columns_list = array_merge($not_nullable_columns, $request->selected_columns);
            $columns_list = implode(',', $columns_list);

            try {
                $response = Http::withoutVerifying()
                    ->withHeaders([
                        'Authorization' => 'Bearer ' . Config::get('chatgpt-seeder.chatgpt_api_key'),
                        'Content-Type' => 'application/json',
                    ])->post('https://api.openai.com/v1/engines/text-davinci-003/completions', [
                        "prompt" => 'Please generate the necessary data for seeding the database table. Take into account the following details:
                    Real or Fake data: ' . $request->data_type . '
                    Table Name: ' . $request->database_table . '
                    Number of Records: ' . $request->number_of_records . '
                    Columns: ' . $columns_list . '
                    Data required description: ' . $request->data_required . '
                Ensure that you format the data as valid JSON, using the column names as keys. Remove any new lines from the JSON structure to maintain its validity.',
                        "max_tokens" => (int)Config::get('chatgpt-seeder.chatgpt_max_tokens'),
                    ]);
            } catch (\Exception $e) {
                return response()->json([
                    'exception' => true,
                    'exception_message' => $e->getMessage(),
                ]);
            }

            if (isset($response->json()['choices'][0])) {
                $repsonse = explode('\n', $response->json()['choices'][0]['text']);
                $usage = $response->json()['usage'];
                $string = stripslashes(trim($repsonse[0]));
                $modifiedString = preg_replace('/(?<!\\\\)\s+/', ' ', $string);
                $modifiedString = '[' . $modifiedString . ']';
                $array = json_decode($modifiedString, true);

                return response()->json([
                    'data' => $array[0],
                    'usage' => $usage,
                ]);
            } else {
                return response()->json([
                    'api_response_error' => true,
                ]);
            }

        } catch (\Exception $e) {
            return response()->json([
                'exception' => true,
                'exception_message' => $e->getMessage(),
            ]);
        }
    }

    public function proceed(NovaRequest $request)
    {
        try {
            if (is_array($request->seed_data)) {
                try {
                    DB::table($request->database_table)->truncate();
                    foreach ($request->seed_data as $item) {
                        DB::table($request->database_table)->insert($item);
                    }
                    return response()->json([
                        'succeed' => true
                    ]);
                } catch (\Exception $e) {
                    return response()->json([
                        'exception' => true,
                        'exception_message' => $e->getMessage(),
                    ]);
                }
            }
            return response()->json([
                'succeed' => false
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'exception' => true,
                'exception_message' => $e->getMessage(),
            ]);
        }
    }

    public function getRetry()
    {
        return response()->json([
            'generate_retry' => Config::get('chatgpt-seeder.chatgpt_generate_retry')
        ]);
    }
}
