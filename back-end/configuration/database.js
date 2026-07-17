const mongoose = require('mongoose');

const connectDatabase = ()=>{
    try{
        mongoose.connect(process.env.DATABASE_CONN_STR).then(()=>{
        console.log('Db connected ')
    })}catch(error){
        console.log(error)
    }
        
    }

module.exports = connectDatabase