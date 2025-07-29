import React, { useState } from "react";
import axios from 'axios';

const TikTokLogin =() => {
    const [accessToken, setAccessToken]= useState("");

    const handleLogin = async () => {
        try {
            const response = await axios.post('/ost:5000/api/user/login-tiktok', { accessToken });
            alert(response.data.message);
        } catch (error) {
            console.error(error);
            alert('Error al iniciar sesión con Tiktok');
        }
    };
    return (
        <div>
            <h2>Iniciar Sesión con Tiktok</h2>
            <input
            type = 'text'
            value = {accessToken}
            onChange = {(e) => setAccessToken(e.target.value)}
            placeholder= 'Token de acceso de Tiktok?'
            />
            <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
    );
};

export default TikTokLogin;
// This component allows users to log in using their TikTok access token.