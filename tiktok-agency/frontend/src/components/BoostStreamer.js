import React, {useState } from 'react';
import axios from 'axios';

const BoostStreamer = ({ userId }) => {
    //NOTE - Valor predeterminado
    const [viewers, setViewers] =useState(1500);
    const [message, setMessage] = useState('');

    const handleBoostStreamer =async () => {
        try {
            const response =await axios.post('http://localhost:5000/api/sales/boost-streamer', { useId, viewers });
            setMessage('Boost exitoso: ${response.data.viewers} persona por $${response.data.totalCost}');
        } catch (error) {
            console.error(error);
            setMessage('Erros al realizar la compra del boost');
        }
};
return (
    <div>
        <h2>Boost para Streamers</h2>
        <input
            type="number"
            value={viewers}
            onChange={(e) => setViewers(Number(e.target.value))}
                placeholder="Número de personas" 
            />
            <button onClick={handleBoostStreamer}>Boost</button>
            {message && <p>{message}</p>} 
    </div>
);
};

export default BoostStreamer;