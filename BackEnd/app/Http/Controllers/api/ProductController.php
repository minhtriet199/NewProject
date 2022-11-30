<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Catagory;
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
    public function search($name){
        $product = Product::where('product_name','Like','%'.$name.'%')->get();
        return response()->json($product);
    }

}