import React, { useState } from 'react';
import axios from 'axios';

const ProductSale = ({ productId }) => {
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState('');

    const handleSale = async (id, quantity) => {
        try {
            const response = await axios.put(`http://localhost:8000/api/productos/${id}/reduce-stock`, { quantity });
            console.log('Stock updated:', response.data);
        } catch (error) {
            setError('Error updating stock: ' + error.response.data.message);
            console.error('Error updating stock:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSale(productId, quantity);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Quantity</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="form-control"
                    min="1"
                />
            </div>
            <button type="submit" className="btn btn-primary">Complete Sale</button>
            {error && <p className="text-danger">{error}</p>}
        </form>
    );
};

export default ProductSale;
