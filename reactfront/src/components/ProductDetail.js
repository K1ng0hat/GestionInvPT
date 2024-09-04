import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductSale from './ProductSale';

const ProductDetail = ({ productId }) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/productos/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    if (loading) return <p>Cargando...</p>;

    return (
        <div>
            <h1>{product.nombre}</h1>
            <p>{product.descripcion}</p>
            <p>Precio: {product.precio}</p>
            <p>Stock: {product.stock}</p>

            <ProductSale productId={productId} />
        </div>
    );
};

export default ProductDetail;
