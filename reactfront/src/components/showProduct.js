import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Importa las herramientas de notificación
import 'react-toastify/dist/ReactToastify.css'; // Estilo de las notificaciones

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

    const handleSale = async (id, quantity) => {
        try {
            const response = await axios.put(`${endpoint}/productos/${id}/reduce-stock`, { quantity });
            if (response.data.success) {
                if (response.data.message === 'Stock es bajo') {
                    toast.warning(`El stock del producto ${id} es bajo!`);
                } else {
                    toast.success('Stock reducido con éxito');
                }
            }
            getAllProducts(); // Actualiza la lista de productos
        } catch (error) {
            console.error('Error updating stock:', error);
            toast.error('Error al reducir el stock');
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
                                <button onClick={() => handleSale(product.id, 1)} className='btn btn-warning'>Vender</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ToastContainer /> {/* Añade el contenedor de notificaciones */}
        </div>
    );
};

export default ShowProduct;
