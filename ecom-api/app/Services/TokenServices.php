<?php
    namespace App\Services;
    use Log;
    use Exception;
    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;

    class TokenServices{
        public function create($payload){
            $key = env('APP_KEY');
            try{
                $token = JWT::encode($payload, $key, 'HS256');
            }catch(Exception $exception){
                Log::error($exception);
                return false;
            }
            return $token;
        }

        public function decode($token){
            $key = env('APP_KEY');
            try{
                $decoded = JWT::decode($token, new Key($key, 'HS256'));
            }catch(Exception $exception){
                Log::error($exception);
                return false;
            }
            return (array) $decoded;
        }
    }
