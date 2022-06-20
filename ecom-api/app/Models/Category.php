<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = [
        'slug_id',
        'name',
    ];

    protected $hidden = [
        'id',
        'p_category_id',
    ];

    public function pcategory(){
        return $this->belongsTo(PCategory::class);
    }

    public function products(){
        return $this->hasMany(Product::class);
    }
}
