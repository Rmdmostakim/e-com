<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'slug_id',
        'name',
        'brand_slug_id',
        'category_slug_id',
        'unit_price',
        'import_price',
        'stock',
    ];

    protected $hidden = [
        'id',
    ];

    public function category(){
        return $this->belongsTo(Category::class,'category_slug_id','slug_id');
    }

    public function brand(){
        return $this->belongsTo(Brand::class,'brand_slug_id','slug_id');
    }

    public function images(){
        return $this->hasMany(ProductImage::class,'product_slug_id','slug_id');
    }

    public function details(){
        return $this->hasOne(ProductDetails::class,'product_slug_id','slug_id');
    }
}
