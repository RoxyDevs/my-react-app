const express = require('express');
const router = express.Router();

// Asegurarse de instalar el SDK de Paypal
const { PayPal} = require('paypal-rest-sdk');

//Configura PayPal
PayPal.configure({
    //Cambia a "live" para producción
    mode: 'sandbox',
    client_id:process.env.PAYPAL_CLIENT_ID,
    client_secret:rocess.env.PAYPAL_CLIENT_SECRET,
});

//Crea un pago
router.post('/create-payment',(req,res) => {
    const { amount } = req.body;
    const create_payment_json = {
        intent: 'sale',
        payer: {
            payment_method: 'paypal',
        },
        redirect_urls: {
            return_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        },
        transactions: [{
            item_list:{
                items: [{
                name: 'Paquete de TikTok',
                price: amount,
                currency: 'USD',
                quantity: 1,
                }],
            },
            amount: {
                currency: 'USD',
                total: amount,
            },
            decription:'Compra de paquete de Tiktok',   
        }],   
    };

    Paypal.payment.create(create_payment_json, (error, payment) => {
        if (error) {
            console.error(error);
            res.status(500).sent(error);
        } else {
            res.jason(payment);
        }
    });
});

module.exports = router;