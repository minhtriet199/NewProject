<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $product = product::all();
        return response()->json($product);
    }
    public function show($id)
    {
        $product =product::where('id',$id)->first();
        return response()->json($product);
    }
}