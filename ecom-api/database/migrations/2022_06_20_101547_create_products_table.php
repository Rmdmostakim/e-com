<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('slug_id')->unique();
            $table->string('name');
            $table->smallInteger('brand_slug_id');
            $table->smallInteger('category_slug_id');
            $table->double('unit_price', 8, 2);
            $table->double('import_price', 8, 2);
            $table->double('offer_price', 8, 2)->nullable();
            $table->smallInteger('offer_type')->nullable();
            $table->smallInteger('stock');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
