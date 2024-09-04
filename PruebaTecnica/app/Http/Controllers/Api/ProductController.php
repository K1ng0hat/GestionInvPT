<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Validator;
class ProductController extends Controller
{
    public function index()
    {
        // Devuelve una lista de todos los productos
        $products = Product::all();

        $data = [
            'products' => Product::all(),
            'status' => 200
        ];
        return response()->json($data);

    }

    public function store(Request $request)
    {
       $validator = Validator::make($request->all(), [
           'nombre' => 'required',
           'descripcion' => 'required',
           'precio' => 'required',
           'stock' => 'required',
       ]);
       if($validator->fails()){
           $data = [
               'message' => 'Validation error',
               'errors' => $validator->errors(),
               'status' => 400
           ];
              return response()->json($data, 400);
       }
       $product = Product::create($request->all());

       if (!$product) {
           $data = [
               'message' => 'Product not created',
               'status' => 500
           ];
           return response()->json($data, 500);
       }
       $data = [
           'product' => $product,
           'status' => 201
       ];

    }

    public function show($id)
    {
        // Devuelve un producto por su id
        $product = Product::find($id);

        if (!$product) {
            $data = [
                'message' => 'Product not found',
                'status' => 404
            ];
            return response()->json($data, 404);
        }

        $data = [
            'product' => $product,
            'status' => 200
        ];
        return response()->json($product);
    }

    public function update(Request $request, $id)
    {
        // Actualiza un producto por su id
        $product = Product::find($id);

        if (!$product) {
            $data = [
                'message' => 'Product not found',
                'status' => 404
            ];
            return response()->json($data, 404);
        }

        $product->update($request->all());

        $data = [
            'product' => $product,
            'status' => 200
        ];
        return response()->json($data);
    }

    public function destroy($id)
    {
        // Elimina un producto por su id
        $product = Product::find($id);

        if (!$product) {
            $data = [
                'message' => 'Product not found',
                'status' => 404
            ];
            return response()->json($data, 404);
        }

        $product->delete();

        $data = [
            'message' => 'Product deleted',
            'status' => 200
        ];
        return response()->json($data);
    }

    public function reduceStock(Request $request, $id)
    {
        // Encuentra el producto por ID
        $product = Product::findOrFail($id);

        // Obtén la cantidad a reducir del stock, por defecto 1
        $quantity = $request->input('quantity', 1);

        // Verifica si el stock es suficiente
        if ($product->stock >= $quantity) {
            // Reduce el stock
            $product->stock -= $quantity;
            $product->save();

            // Opcional: Aquí puedes integrar la lógica para enviar notificaciones al sistema externo

            return response()->json(['success' => true, 'message' => 'Stock reducido con éxito']);
        } else {
            return response()->json(['success' => false, 'message' => 'Stock insuficiente'], 400);
        }

    $product->stock -= $quantity;
    $product->save();



    return response()->json($product);
}
}
