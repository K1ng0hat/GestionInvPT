import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/productos';

const CreateProduct = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('0');
    const [stock, setStock] = useState('0');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, { nombre, descripcion, precio, stock });
        navigate('/');
    };

    return (
        <div>
            <h1>Create Product</h1>
            <form onSubmit={store}>
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

export default CreateProduct;
