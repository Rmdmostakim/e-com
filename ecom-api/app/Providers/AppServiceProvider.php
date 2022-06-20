<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\ProductServices;

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
