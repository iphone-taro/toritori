<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/api/getCategoryList', [MainController::class, 'getCategoryList']);
Route::post('/api/getItemData', [MainController::class, 'getItemData']);

Route::get('/{any}', function () {
    return view('spa.app')->with(['card' => "aaa", 'title' => "bbb", 'description' => "ccc"]);
    // return view('welcome');
})->where('any', '.*');;
