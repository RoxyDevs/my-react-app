import React, { useState } from 'react'; 
import axios from 'axios'; 

const BuyShares = ({ userId }) => {
//NOTE - Valor predeterminado
const [amount, setAmount] = useState(50000);
const [message, setMessage] = useState('');

const handleBuyShares = async () => {
    try {
        const response = await axios.post('localhost:5000/api/sales/buy-shares', {userId, amount });
        setMessage('Compra exitosa: ${response.data.amount} compartidas por $${response.data.price}')
    } catch (error) { 
        console.error(error);
        setMessage('Error al realizar la compra'); 
    }
};

return (
    <div>
        <h2>Compra de Compartidas</h2>
        <select value={amount} onChange={(e) => setAmount(Number(e.target.value))}>
            <option value={50000}>50,000 Compartidas - $14.99</option>
            <option value={100000}>100,000 Compartidas - $24.99</option>
            <option value={250000}>250,000 Compartidas - $44.99</option>
            <option value={500000}>500,000 Compartidas - $84.99</option>
            <option value={1000000}>1,000,000 Compartidas - $149.99</option>
        </select>
        <button onClick={handleBuyShares}>Comprar</button>
        {message && <p>{message}</p>}
        <p>Nota: Las compras de compartidas son finales y no reembolsables.</p>
        <p>Las compartidas se pueden usar para promocionar tu perfil y aumentar tu visibilidad en TikTok.</p>
        <p>Para más información, visita nuestra <a href="https://www.tiktok.com/legal/terms-of-service">página de términos de servicio</a>.</p>
        <p>Si tienes alguna pregunta, contacta a nuestro <a href="https://www.tiktok.com/legal/contact">equipo de soporte</a>.</p>
        <p>¡Gracias por usar nuestra plataforma!</p>
    </div>
);
};

export default BuyShares;
 