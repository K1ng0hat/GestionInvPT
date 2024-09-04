import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; // Asegúrate de tener react-toastify instalado para notificaciones

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

    const handleSale = async (id) => {
        try {
            const quantity = 1; // Cantidad a reducir
            const response = await axios.put(`${endpoint}/productos/${id}/reduce-stock`, { quantity });
            toast.success('Stock actualizado con éxito');
            getAllProducts(); // Actualiza la lista de productos
        } catch (error) {
            console.error('Error updating stock:', error);
            toast.error('Error al actualizar el stock');
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
                                <button onClick={() => handleSale(product.id)} className='btn btn-warning'>Vender</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowProduct;
