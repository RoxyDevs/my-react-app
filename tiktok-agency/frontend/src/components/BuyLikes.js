import React, {useState} from 'React';
import axios from 'axios';

const BuyLikes =({ userId }) => {
    //NOTE - Valor predeterminado
    const [amount, setAmount] = useState(50000);
    const [message, setMessage] = useState('');

    const handleBuyLikes = async() => {
        try {
            const response =await axios.post(http://localhost:5000/api/sales/buy-likes', { userId, amount });
            setMessage('Compra exitosa: ${response.data.amount} likes por $${response.dataprice]');
        } catch (error) {
            setMessage('Error al realizar la compra');
        }       
 };
    return (
        <div>
            <h2>Compra de Likes</h2>
            <select value={amount} onChange={(e) => setAmount(Number(e.target.vale))}>
                <option value={50000}>50,000 Likes - $4.99</option>
                <option value={100000}>100,000 Likes - $8.99</option>
                <option value={200000}>200,000 Likes - $15.99</option>
                <option value={500000}>500,000 Likes - $29.99</option>
                <option value={1000000}>1,000,000 Likes - $49.99</option>
            </select>
            <button onClick={handleBuyLikes}>Compra</button>
            {message && <p>{message</p>}
        </div>
    );
};
export default BuyLikes;
