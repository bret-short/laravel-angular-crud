<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bloggers;

class BloggerController extends Controller
{
    public function getBlogger() {
        return response()->json(Bloggers::all(), 200);
    }

    public function getBloggerById($id) {
        $blogger = Bloggers::find($id);
        if(is_null($blogger)) {
            return response()->json(['message' => 'Blogger Not Found'], 404);
        }
        return response()->json($blogger::find($id), 200);
    }

    public function addBlogger(Request $request) {
        $blogger = Bloggers::create($request->all());

        return response($blogger, 201);
    }

    public function updateBlogger(Request $request, $id) 
    {
        $blogger = Bloggers::find($id);
        if(is_null($blogger)) {
            return response()->json(['message' => 'Blogger Not Found'], 404);
        }
        $blogger->update($request->all());
        return response($blogger, 200);
    }

    public function deleteBlogger(Request $request, $id) {
        $blogger = Bloggers::find($id);
        if(is_null($blogger)) {
            return response()->json(['message' => 'Blogger Not Found'], 404);
        }
        $blogger->delete();
        return response()->json(null, 204);
    }
}