<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductDetails extends Model
{
    use HasFactory;
    protected $fillable = [
        'slug_id',
        'product_slug_id',
        'details',
    ];
    protected $hidden = [
        'id',
    ];

    public function product(){
        return $this->belongsTo(Product::class,'product_slug_id','slug_id');
    }
}
