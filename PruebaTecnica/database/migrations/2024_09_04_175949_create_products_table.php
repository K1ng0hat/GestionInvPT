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
            $table->id(); // Crea una columna `id` autoincrementable como clave primaria
            $table->string('nombre'); // Columna para el nombre del producto
            $table->text('descripcion'); // Columna para la descripción del producto
            $table->decimal('precio', 10, 2); // Columna para el precio del producto con 2 decimales
            $table->integer('stock'); // Columna para el stock del producto
            $table->timestamps(); // Crea columnas `created_at` y `updated_at`
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
