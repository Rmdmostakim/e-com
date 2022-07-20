<?php

namespace App\Http\Controllers;

use Validator;
use UserAuth;
use Product;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function registration(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'bail|required|string|min:5',
            'phone'=>'bail|required|string|min:11|max:18',
            'email'=>'bail|required|email|unique:users',
            'password'=>'bail|required|string|min:6',
        ]);
        if ($validator->fails()) {
            return $validator->messages();
        }
        $validated = $request->only(['name','phone','email','password']);

        if(UserAuth::registration($validated)){
            return response('registration success',201);
        }
        return response('registration failed',500);
    }

    public function userVerification(Request $request){
        $validator = Validator::make($request->all(),[
            'email'=>'bail|required|email|exists:users,email',
            'verification_code'=>'bail|required|string|min:8|max:8|exists:users,verification_code',
        ]);
        if ($validator->fails()) {
            return $validator->messages();
        }
        $validated = $request->only(['email','verification_code']);

        if(UserAuth::userVerification($validated)){
            return response('verification success',202);
        }
        return response('verification failed',500);
    }

    public function resnedVerification(Request $request){
        $validator = Validator::make($request->all(),[
            'email'=>'bail|required|email|exists:users,email',
        ]);
        if($validator->fails()){
            return $validator->messages();
        }
        $validated = $request->only(['email']);
        if(UserAuth::emailVerify($validated['email'])){
            return response('verification code send',200);
        }
        return response('failed',500);
    }

    public function userLogin(Request $request){
        $validator = Validator::make($request->all(),[
            'email'=>'bail|required|email|exists:users,email',
            'password'=>'bail|required|string|min:6',
        ]);
        if($validator->fails()){
            return $validator->messages();
        }
        $validated = $request->only(['email','password']);

        return UserAuth::attempt($validated);
    }
}
