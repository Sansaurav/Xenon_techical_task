const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://sanskar:sanskarsaurav@cluster0.ca9r8io.mongodb.net/');


const db = mongoose.connection;
db.on('error',console.error.bind(console,"error connecting to database"));

db.once('open',function(){
    console.log('connected to Database : MongoDB')
});
module.exports=db;