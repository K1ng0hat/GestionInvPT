import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const endpoint = 'http://localhost:8000/api/productos';

const EditProduct = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('0');
    const [stock, setStock] = useState('0');
    const navigate = useNavigate();
    const { id } = useParams();

    const update = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${endpoint}/${id}`, { nombre, descripcion, precio, stock });

            // Verificar si el stock es bajo
            if (stock < 10) { 
                toast.warn(`El stock del producto ${nombre} (${id}) es bajo`, {
                    position: "bottom-right",
                    autoClose: 5000,
                });
            }

            navigate('/');
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    useEffect(() => {
        const getProductbyID = async () => {
            try {
                const response = await axios.get(`${endpoint}/${id}`);
                setNombre(response.data.nombre);
                setDescripcion(response.data.descripcion);
                setPrecio(response.data.precio);
                setStock(response.data.stock);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        getProductbyID();
    }, [id]);

    return (
        <div>
            <h1>Actualizar Producto</h1>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Descripcion</label>
                    <input
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Stock</label>
                    <input
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>

                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    );
};

export default EditProduct;
