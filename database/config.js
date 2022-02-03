/* 
    Creado por: David Montalba Gonzalez
    BootCamp Web Full Stack - KeepCondig XII
*/

'use strict';

const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = () => {

    try {
         mongoose.connect( process.env.MONGODB_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    
        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
};



module.exports = {
    dbConnection
}
