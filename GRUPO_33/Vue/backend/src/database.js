const mongoose = require ('mongoose');

mongoose.connect ('mongodb://localhost/vue-node',{
    useNewUrlParser : true,
    useUnifiedTopology: true,
})

.then(db => console.log('base de datos conectada'))
.catch(err => console.log(err));

var db = mongoose.connection;
db.on("open", () => {
 console.log("Connected to mongoDB");
});
db.on("error", (error) => {
 console.log(error);
});