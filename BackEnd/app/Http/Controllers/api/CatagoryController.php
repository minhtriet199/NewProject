<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Catagory;
use App\Models\Product;

class CatagoryController extends Controller
{
    public function index()
    {
        $catagory = Catagory::all();
        return response()->json($catagory);
    }
    public function ProductByMenu($id){
        $catagory = Catagory::where('id',$id)->first();
        $product = Product::where('menu_id',$id)->get();
        return response()->json([
            'product' => $product,
            'catagory' => $catagory
        ]);
    }
}