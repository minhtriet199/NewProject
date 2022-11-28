<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Catagory;

class CatagoryController extends Controller
{
    public function index()
    {
        $catagory = Catagory::all();
        return response()->json($catagory);
    }
}