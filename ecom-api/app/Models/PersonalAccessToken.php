<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalAccessToken extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_slug_id',
        'token',
    ];

    protected $hidden = [
        'id',
    ];
}
