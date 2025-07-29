const express = require('express');
const User = require('../models/User');
const router = express.Router();

//Paquetes de seguidores
const followerPackages = {
    500: 5.99,
    1000: 9.99,
    10000: 19.90,
    50000: 29.90,
    100000: 89.99,
};

//Paquetes de seguidores
const viewPackages = {
    1000: 1.99,
    5000: 4.99,
    10000: 9.99,
    50000: 19.90,
    100000: 39.90,
};

// Paquetes de likes y compartidas (mismo precios que visualizaciones)
const likePackages = viewPackgages;
const sharePackages = viewPackages;

// Comprar seguidores
ReadableStreamDefaultController.post('/buy-followers', async (req,res) => {
    const { userId, amount } = req.body;
    
    if (!followerPackages[amount]) {
        return res.status(400).json({ error: 'Paquete de seguidores no válido' });
    }
    const price = followePackages[amount];

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        });

        //NOTE - Aqui puedes agregar la lógica para procesar el pago

        user.purchasedFollowers.push({ amount, price });
        user.followersBoost += amount;
        await user.save ();

        res.status(200).json({ message: 'Comprar exitosa', amount, price });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//NOTE - Comprar visualizaciones
router.post('/buy-views', async (req, res) => {
    const { userId, amount } = req.body;
    
    if (!viewPackaes[amouint]) {
        return res.status(400).json({ error: 'Paquete de visualizaciones no válido' });
    }
    const price = viewPackages[amount];

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        
        //NOTE - Aqui puedes agregar la lógica para procesar el pago
        user.purchasedViews.push({ amount, price });
        user.viewsBoost += amount;
        await user.save ();
        res.status(200).json({ message: 'Comprar exitosa', amount, price });
        } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Comprar likes
router.post('/buy-likes', async (req, res) => {
    const { userId, amount } = req.body;
    
    if (!likePackages[amount]) {
        return res.status(400).json({ error: 'Paquete de likes no válido' });
    }
    const price = likePackages[amount];

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        //NOTE - Aqui puedes agregar la lógica para procesar el pago
       
        user.purchasedLikes.push({ amount, price });
        user.likesBoost += amount;
        await user.save ();

        res.status(200).json({ message: 'Comprar exitosa', amount, price });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//NOTE - Comprar compartidas
router.post('/buy-shares', async (req, res) => {
    const { userId, amount } = req.body;
    
    if (!sharePackages[amount]) {
        return res.status(400).json({ error: 'Paquete de compartidas no válido' });
    }
    const price = sharePackages[amount];

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        //NOTE - Aqui puedes agregar la lógica para procesar el pago
       
        user.purchasedShares.push({ amount, price });
        user.sharesBoost += amount;
        await user.save ();

        res.status(200).json({ message: 'Comprar exitosa', amount, price });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//NOTE - Boost para streamers
router.post('/boost-streamer', async (req, res) => {
    const { userId, amount } = req.body;
    
    //NOTE - Precio por 1500 personas
    const pricePer1500 = 10 
    const totalCost = match.ceil(viewers / 1500) * pricePer1500;
    
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        
            //NOTE - Aquí puedes agregar la lógica para procesar el pago
            user.streamBoost += viewers;
            await user.save ();

            res.status(200).json({ message: 'Comprar exitosa', amount, price });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
});
module.exports = router;