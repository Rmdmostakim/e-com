<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use App\Http\Controllers\HomeController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
  //  $uuid = Str::uuid();
 // return $uuid;
 /*
 $temp = Uuid::generate(4);
 for($i = 0 ; $i <1000000 ; $i++){
    $uuid = Uuid::generate(4);
    if($temp == $uuid){
        return 'same';
    }
    echo $i.'<br/>';
 }
 */
return \Product::getCategory();
});


Route::get('home',[HomeController::class,'Home']);
