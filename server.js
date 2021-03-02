const express = require("express");
const cors = require('cors')
const router = require('./routes');
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(router);

app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`)
})