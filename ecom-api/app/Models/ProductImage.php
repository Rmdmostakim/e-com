<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    use HasFactory;
    protected $fillable = [
        'slug_id',
        'product_id',
        'image',
    ];

    protected $hidden = [
        'id',
        'product_id',
    ];

    public function product(){
        return $this->belongsTo(Product::class,'product_slug_id','slug_id');
    }
}
