<?php

namespace Naif\ChatgptSeeder\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Countries;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Schema;
use Laravel\Nova\Http\Requests\NovaRequest;

class ChatGPTSeederController extends Controller
{
    public function tables()
    {
        return response()->json([
            'tables' => Schema::getAllTables()
        ]);
    }

    public function getColumns($table_name)
    {

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
    }

    public function generate(NovaRequest $request)
    {
        $columns = $this->getColumns($request->database_table);
        $columns = json_decode($columns->content(),true);

        $not_nullable_columns = array_filter($columns['columns'], function ($item) {
            return $item['column_not_nullable'] == true;
        });

        $not_nullable_columns = array_column($not_nullable_columns, 'column_name');

        $columns_list = array_merge($not_nullable_columns,$request->selected_columns);
        $columns_list = implode(',', $columns_list);


        $response = Http::withoutVerifying()
            ->withHeaders([
                'Authorization' => 'Bearer ' . env('CHATGPT_API_KEY'),
                'Content-Type' => 'application/json',
            ])->post('https://api.openai.com/v1/engines/text-davinci-003/completions', [
                "prompt" => 'You will be provided with data required to seed database table, you will be provided by table name, number of records needed and columns name. Data type: ' . $request->data_type . ' data and Data required: ' . $request->data_required . ' and Number of records: ' . $request->number_of_records . ' and columns name ' . $columns_list . ' use columns as key make it a valid json without new lines.',
                "max_tokens" => 1000,
            ]);

        $repsonse = explode('\n', $response->json()['choices'][0]['text']);
        $total_tokens = $response->json()['usage']['total_tokens'];
        $string = stripslashes(trim($repsonse[0]));
        $modifiedString = preg_replace('/(?<!\\\\)\s+/', ' ', $string);
        $modifiedString = '[' . $modifiedString . ']';
        $array = json_decode($modifiedString, true);

        return response()->json([
            'data' => $array
        ]);
    }

    public function proceed(NovaRequest $request)
    {
        if (is_array($request->seed_data)) {
            DB::table($request->database_table)->truncate();
            foreach ($request->seed_data as $item) {
                DB::table($request->database_table)->insert($item);
            }
            return response()->json([
                'succeed' => true
            ]);
        }
        return response()->json([
            'succeed' => false
        ]);
    }

    public function getRetry()
    {
        return response()->json([
            'generate_retry' => Config::get('chatgpt-seeder.chatgpt_generate_retry')
        ]);
    }
}
