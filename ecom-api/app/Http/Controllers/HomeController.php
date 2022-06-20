<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PCategory;

class HomeController extends Controller
{
    public function Home(){
        return Pcategory::with('category','category.products','category.products.brand','category.products.images')->get();
    }
}
