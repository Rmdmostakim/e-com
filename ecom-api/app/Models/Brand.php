<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;
    protected $fillable = [
        'slug_id',
        'name',
    ];

    protected $hidden = [
        'id',
    ];

    public function products(){
        return $this->hasMany(Product::class,'brand_slug_id','slug_id');
    }
}
