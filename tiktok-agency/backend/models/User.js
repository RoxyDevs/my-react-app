const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    tiktokAccessToken: { type: String, default: " " },
    subscription: {
        type: String,
        enum: ['none','basic', 'premium'],
        default: 'none',
    },
    followersBoost: {type: Number, default: 0 },
    viewsBoost: { type: Number, default: 0 },
    likesBoost: { type: Number, default: 0},
    sharesBoost: { type: Number, default: 0},
    
    //Para boost de Streamers 
    streamerBoost: { type: Number, default: 0},
    videoUrl: { type: String, default: " "},
    subscriptionEndDate: { type: Date, default: null },
    performanceStats: {
        daily: { type: Object, default: {} },
        weekly: { type: Object, default: {} },
        monthly: { type: Object, default: {} },
    },
    purchasedFollowers: [
        {
            amount: { type: Number, required: true },
            price: { type: Number, required: true },
            date: { type: Date, default: Date.now },
        },
    ],
    purchasedViews: [
        {
            amount: { type: Number, required: true },
            price: { type: Number, required: true },
            date: { type: Date, default: Date.now },
        },
    ],
    purchasedLikes: [
        {
            amount: { type: Number, required: true },
            price: { type: Number, required: true },
            date: { type: Date, default: Date.now },
        },
    ],

}),

module.exports= mongoose.models('User', UserSchema);