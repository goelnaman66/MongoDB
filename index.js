const Mongoose = require('mongoose');

const connect = () =>{
   return Mongoose.connect('mongodb://localhost:27017/UnacademyMongoDemo');
};


connect()
.then(connection => {
    console.log("Mongo connection Successful");
})
.catch(err=>console.log(err));
