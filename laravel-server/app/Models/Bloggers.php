<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bloggers extends Model
{
    public $timestamp = false;
    protected $fillable = ['name', 'blog'];
}