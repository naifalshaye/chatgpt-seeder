<?php

namespace Naif\ChatgptSeeder\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

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
            if (!in_array($column->getName(),['id','created_at','updated_at','deleted_at'])) {
                $columns_list[$index] =
                    [
                        'column_name' => $column_name,
                        'column_type' => $column->getType()->getName(),
                        'column_length' => $column->getLength(),
                        'column_nullable' => $column->getNotnull(),
                        'column_default' => $column->getDefault(),
                    ];
                $index++;
            }
        }
        return response()->json([
            'columns' => $columns_list
        ]);
    }

    public function getModelFromTable($table)
    {
        foreach (get_declared_classes() as $class) {
            if (is_subclass_of($class, 'Illuminate\Database\Eloquent\Model')) {
                $model = new $class;
                if ($model->getTable() === $table)
                    return $model;
            }
        }

        return false;
    }
}
