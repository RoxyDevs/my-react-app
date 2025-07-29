const express = require('express');
const User = require('../models/User');
const router = express.Router();
const axios = require('axios');

// Inicio de sesión con Tiktok
router.post('/login-tiktok', async (req, res) => {
    const { accessToken } = req.body;
    try {
        const response = await axios.get('https://api.tiktok.com/user/info?access_token=${accessToken}');
        const { username, email } = response.data;

        let user = await User.findOne({ email });
        if (!user) {
            user = new User({ username, email, tiktokAccessToken: accessToken });
            await user.save();
        } else {
            user.tiktokAccessToken = accessToken;
            await user.save();
        }

        res.status(200).json({ message: 'Inicio exitoso', user });
    } catch (error) {
        res.status(500).json({ error:error.message };)
    }
});

//Registro de usuario
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
});

//Obtener estadísticas de rendimiento
router.get('/performance-stats/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado'});

        const statsResponse = await axios.get('https://api.tiktok.com/user/stats?access_token=${user.tiktokAccessToken}');
        user.performanceStats = statsResponse.data;
        await user.save();

        res.status(200).json({ performance.Status: user.performanceStats });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    });

module.exports =router;