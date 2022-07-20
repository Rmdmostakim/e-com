<?php

namespace App\Http\Controllers;

use Validator;
use Product;
use Illuminate\Http\Request;

class UsersiteController extends Controller
{
    public function getCart(Request $request){
        $validator = Validator::make($request->all(),[
            'slugs'=>'required|array|min:1',
        ]);
        if($validator->fails()){
            return $validator->messages();
        }

        $validated = $request->only(['slugs']);
        if($result = Product::getCartProducts($validated['slugs'])){
            return response($result,200);
        }
        return response('failed',500);
    }
}
