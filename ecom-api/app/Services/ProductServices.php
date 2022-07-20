<?php

    namespace App\Services;

    use App\Models\PCategory;
    use App\Models\Category;
    use App\Models\Brand;
    use App\Models\Product;
    use App\Models\ProductImage;

    class ProductServices{

        public function getCartProducts($slugs){
            return Product::whereIn('slug_id',$slugs)->get();
        }

        public function getPCategory(){
            return Pcategory::with('category','category.products','category.products.brand','category.products.images')->get();
        }

        public function getCategory(){
            return Category::with('products')->get();
        }

        public function brand(){
            return Brand::with('products')->get();
        }

        public function details(){
            return Product::with('details')->get();
        }

        public function images(){
            return Product::with('images')->get();
        }

        public function reversedImage(){
            return ProductImage::with('product')->get();
        }
    }
