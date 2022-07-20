<?php
    namespace App\Facades;
    use Illuminate\Support\Facades\Facade;

    class UserAuthenticationFacade extends Facade{
        protected static function getFacadeAccessor(){
            return 'UserAuthentication';
        }
    }
