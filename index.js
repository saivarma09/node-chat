const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

app.use(express.json()); //To use JSON data.
app.use(cors())  //To use cors

const port = process.env.PORT || 5000;

app.listen(port, (req, res)=>{
    console.log(`Server running on port: ${port}`)
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri).then(()=> console.log("MongoDB connection Success")).catch((error)=>console.log("error",error.message))


