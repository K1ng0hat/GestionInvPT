<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;

Route::get('/productos', [ProductController::class, 'index']);
route::get('/productos/{id}', [ProductController::class, 'show']);
route::post('/productos', [ProductController::class, 'store']);
route::put('/productos/{id}', [ProductController::class, 'update']);
route::delete('/productos/{id}', [ProductController::class, 'destroy']);
Route::put('/productos/{id}/reduce-stock', [ProductController::class, 'reduceStock']);
