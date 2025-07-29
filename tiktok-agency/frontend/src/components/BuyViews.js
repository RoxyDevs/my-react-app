import React, { useState } from 'react';
import axios from 'axios';

constBuyViews = ({ userId}) => {
    //NOTE - Valor predeterminado
    const [amount, setAmount] = useState(50000);
    const [message, setMessage] = useState("");

    const handleBuyViews = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/sales/buy-views', { useId, amount });
            setMessage('Compra exitosa: ${response.data.amount] visualizaciones por $${response.data.price}');
        } catch (error) {
            setMessage('Error al realizar la compra');
        }
    };

    return (
        <div>
            <h2>Comprar Visualizaciones</h2>
            <select value={amount} onChange={(e) => setAmount(Number(e.target.value))}>
                <option value={50000}>50,000 Visualizaciones - $4.99</option>
                <option value={100000}>100,000 Visualizaciones - $8.99</option>
                <option value={250000}>250,000 Visualizaciones - $14.99</option>
                <option value={500000}>500,000 Visualizaciones - $28.99</option>
                <option value={1000000}>1,000,000 Visualizaciones - $55.99</option>
            </select>
            <button onClick={handleBuyViews}>Comprar</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default BuyViews;