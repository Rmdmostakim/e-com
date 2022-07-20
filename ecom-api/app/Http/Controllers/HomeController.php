<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PCategory;
use App\Models\Product;
use App\Models\ProductDetails;

class HomeController extends Controller
{
    public function Home(){
        $categories = PCategory::with('category')->get();
        $products = Product::with('category','brand','images','details')->get();
        $response = [
            'categories'=>$categories,
            'products'=>$products
        ];
        return response($response,200);
    }
}
