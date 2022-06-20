<?php

    namespace App\Services;

    use App\Models\PCategory;

    class ProductServices{
        public function getCategory(){
            return Pcategory::with('category','category.products','category.products.brand','category.products.images')->get();
        }
    }
