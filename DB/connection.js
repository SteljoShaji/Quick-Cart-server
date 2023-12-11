const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("QuickCart server connected successfully with MongoDb Atlas");
}).catch((err)=>{
    console.log(`MongoDB connection Failed!!! Error:${err}`);
})