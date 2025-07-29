import React, {useState} from 'react';
import axios from 'axios';

const BuyFollowers = ({ userId }) => {
    const [amount, setAmount] = useState(500); //NOTE - Valor predeterminado.
    const [message, setMessage] = useState('');

    const handleBuyFollowers = async() => {
        try {
            const response = await.axios.post('https://localhost:5000/api/sales/buy-followers', {userId, amount});
            setMessage('Compra exitosa: ${response.datta.amount} seguidores por $${response.data.price}');
            } catch (error) {
                console.error(error);
                setMessage('Error al realizar la compra');
            }
        };
    return (
        <div>
            <h2>Compra de seguidores</h2>
            <select value={amount} onChange={(e) => setAmount(Number(e.target.value))}>
                <option value={500}> 500 seguidores por $5.99</option>
                <option value={1000}> 1000 seguidores por $9.99</option>
                <option value={50000}> 50000 seguidores por $44.99</option>
                <option value={100000}> 100000 seguidores por $89.99</option>
            </select>
            <button onClick={handleBuyFollowers}>Comprar</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default BuyFollowers;