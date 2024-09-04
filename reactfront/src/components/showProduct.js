import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; // Importa toast

const endpoint = 'http://localhost:8000/api';

const ShowProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        try {
            const response = await axios.get(`${endpoint}/productos`);
            setProducts(response.data.products);

            // Mostrar notificación para cada producto con stock bajo
            response.data.products.forEach(product => {
                if (product.stock < 10) { // Ajusta el umbral según tus necesidades
                    toast.warn(`El stock del producto ${product.nombre} (${product.id}) es bajo`, {
                        position: "bottom-right",
                        autoClose: 5000,
                    });
                }
            });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`${endpoint}/productos/${id}`);
            getAllProducts();
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div>
            <div className='d-grip gap-2 me-2'>
                <Link to='/create' className='btn btn-primary'>Nuevo Producto</Link>
            </div>
            
            <table className='table table-striped'>
                <thead className='bg-primary table-dark'>
                    <tr>
                        <th scope='col'>Nombre del producto</th>
                        <th scope='col'>Descripcion</th>
                        <th scope='col'>Precio</th>
                        <th scope='col'>Stock</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.nombre}</td>
                            <td>{product.descripcion}</td>
                            <td>{product.precio}</td>
                            <td>{product.stock}</td>
                            <td>
                                <Link to={`/edit/${product.id}`} className='btn btn-primary'>Edit</Link>
                                <button onClick={() => deleteProduct(product.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowProduct;
