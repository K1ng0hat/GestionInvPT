<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\AuthController;

// Rutas de productos
Route::get('/productos', [ProductController::class, 'index']);
Route::get('/productos/{id}', [ProductController::class, 'show']);
Route::post('/productos', [ProductController::class, 'store']);
Route::put('/productos/{id}', [ProductController::class, 'update']);
Route::delete('/productos/{id}', [ProductController::class, 'destroy']);
Route::put('/productos/{id}/reduce-stock', [ProductController::class, 'reduceStock']);

// Rutas de autenticación
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
    Route::post('register', [AuthController::class, 'register']);


});
