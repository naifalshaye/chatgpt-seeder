<?php

use Illuminate\Support\Facades\Route;
use Naif\ChatgptSeeder\Http\Controllers\ChatGPTSeederController;

/*
|--------------------------------------------------------------------------
| Tool API Routes
|--------------------------------------------------------------------------
|
| Here is where you may register API routes for your tool. These routes
| are loaded by the ServiceProvider of your tool. They are protected
| by your tool's "Authorize" middleware by default. Now, go build!
|
*/

Route::get('/chatgpt-seeder/tables',ChatGPTSeederController::class.'@tables');
Route::get('/chatgpt-seeder/columns/{name}',ChatGPTSeederController::class.'@getColumns');
Route::get('/chatgpt-seeder/get-generate-retry',ChatGPTSeederController::class.'@getRetry');
Route::post('/chatgpt-seeder/generate',ChatGPTSeederController::class.'@generate');
Route::post('/chatgpt-seeder/proceed',ChatGPTSeederController::class.'@proceed');
