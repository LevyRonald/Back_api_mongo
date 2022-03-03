const mongoose = require('mongoose');

const conexao ={
    isConnected: 0
};

    const url = process.env.MONGO_URI

const connect = async() => {
    if(conexao.isConnected){
        return;
    }

    const db = await mongoose.connect()
};