<?php
    namespace App\Services;

    use Log;
    use Token;
    use App\Models\User;
    use App\Models\PersonalAccessToken as AccessToken;
    use Illuminate\Support\Str;
    use Illuminate\Support\Facades\Hash;
    use Illuminate\Support\Facades\Mail;

    class UserAuthentication {
        public function registration($credentials){
            $slug_id = Str::uuid();
            try{
                $result = User::create([
                    'slug_id'=>$slug_id,
                    'name'=>$credentials['name'],
                    'email'=>$credentials['email'],
                    'phone'=>$credentials['phone'],
                    'password'=>Hash::make($credentials['password'])
                ]);
            }catch(Exception $exception){
                Log::error($exception);
                $result = false;
            }

            if($result){
                $this->emailVerify($result->email);
                return true;
            }
            return false;
        }

        public function emailVerify($email){
            $token = Str::random(8);
            try{
                $storeToken = User::where('email',$email)->update(['verification_code'=>$token]);
            }catch(Exception $exception){
                Log::error($exception);
                $storeToken = false;
            }
            if($storeToken){
                $data = [
                    'verification_code'=>$token,
                ];
                Mail::send('Mail',$data,function($message) use ($email){
                    $message->to($email);
                    $message->subject('Verification Code');
                });
                return true;
            }

            return false;
        }

        public function userVerification($credentials){
            try{
                $result = User::where('email',$credentials['email'])->update(['verified'=>1]);
                return true;
            }catch(Exception $exception){
                Log::error($exception);
                return false;
            }
        }

        public function attempt($credentials){
            $user = User::where('email',$credentials['email'])->where('verified',1)->first();
            if($user){
                $matched = Hash::check($credentials['password'], $user->password);
                if($matched){
                    $hasToken = AccessToken::where('user_slug_id',$user->slug_id)->first();
                    if($hasToken){
                        return $hasToken->token;
                    }
                    $payload = [
                        'slug_id'=>$user->slug_id,
                        'name'=>$user->name,
                        'email'=>$user->email,
                        'phone'=>$user->phone,
                    ];
                    if($token = Token::create($payload)){
                        try{
                            $login = AccessToken::create([
                                'user_slug_id'=>$user->slug_id,
                                'token'=>$token,
                            ]);
                            return $token;
                        }catch(Exception $exception){
                            Log::error($exception);
                        }
                    }
                }
            }
            return false;
        }


    }
