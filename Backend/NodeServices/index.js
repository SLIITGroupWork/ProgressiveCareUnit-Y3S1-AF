const Express = require('express');
const BodyParser = require('body-parser');
const Routes = require("./Routes");

const index = Express();

index.use(BodyParser.json());
index.use('/',Routes);

index.listen(8083, 'localhost',function(err){
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log("Server is up in port 8083");
});