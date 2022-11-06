<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});


Route::get('/', [\App\Http\Controllers\SaveTextController::class, 'index'])->name('save-text.index');
Route::get('/{note}', [\App\Http\Controllers\SaveTextController::class, 'show'])->name('save-text.show');
Route::post('/{note}', [\App\Http\Controllers\SaveTextController::class, 'store'])->name('save-text.store');
Route::post('/savenote/update-data', [\App\Http\Controllers\SaveTextController::class, 'update'])->name('save-text.update');
Route::post('/savenote/update-url', [\App\Http\Controllers\SaveTextController::class, 'updateUrl'])->name('save-text.update-url');
Route::post('/savenote/update-pass', [\App\Http\Controllers\SaveTextController::class, 'updatePass'])->name('save-text.update-pass');
Route::post('/savenote/login', [\App\Http\Controllers\SaveTextController::class, 'login'])->name('save-text.login');

