<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PCategory extends Model
{
    use HasFactory;
    protected $fillable = [
        'slug_id',
        'name',
    ];

    protected $hidden = [
        'id',
    ];

    public function category(){
        return $this->hasMany(Category::class);
    }
}
