<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\authController;
use App\Http\Controllers\api\CatagoryController;
use App\Http\Controllers\api\ProductController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login',[authController::class,'login']);
Route::post('signup',[authController::class,'signup']);
Route::get('catagory',[CatagoryController::class,'index']);
Route::get('product',[ProductController::class,'index']);
Route::get('product/show/{id}',[ProductController::class,'show']);
Route::get('product/search/{name}',[ProductController::class,'search']);
Route::get('catagory/{id}',[CatagoryController::class,'ProductByMenu']);
