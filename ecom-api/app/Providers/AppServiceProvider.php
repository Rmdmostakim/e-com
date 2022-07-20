<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\ProductServices;
use App\Services\UserAuthentication;
use App\Services\TokenServices;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('ProductServices', function ($app) {
            return new ProductServices;
        });
        $this->app->singleton('UserAuthentication', function ($app) {
            return new UserAuthentication;
        });
        $this->app->singleton('TokenServices', function ($app) {
            return new TokenServices;
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
