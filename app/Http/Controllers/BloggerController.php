<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bloggers;

class BloggerController extends Controller
{
    public function getBlogger() {
        return response()->json(Bloggers::all(), 200);
    }
}