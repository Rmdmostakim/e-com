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
        'brand_id',
        'category_id',
        'unit_price',
        'import_price',
        'stock',
    ];

    protected $hidden = [
        'id',
        'brand_id',
        'category_id',
    ];


    public function brand(){
        return $this->belongsTo(Brand::class);
    }

    public function images(){
        return $this->hasMany(ProductImage::class);
    }
}
