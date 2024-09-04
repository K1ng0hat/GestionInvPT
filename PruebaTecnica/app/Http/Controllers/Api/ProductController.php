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
    $product = Product::findOrFail($id);
    $quantity = $request->input('quantity');

    if ($quantity > $product->stock) {
        return response()->json(['message' => 'Insufficient stock'], 400);
    }

    $product->stock -= $quantity;
    $product->save();

    // Enviar la notificación de bajo producto
    $response = Http::post('http://example.com/notify', [
        'product_id' => $product->id,
        'new_stock' => $product->stock,
    ]);

    return response()->json($product);
}
}
