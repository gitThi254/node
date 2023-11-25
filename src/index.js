const express = require('express')
require('dotenv').config();
const home = require('./routes/home')
const app = express();
app.use(express.json());
app.use("/",home)

const port = process.env.PORT || 9001

app.listen(port, () => {
    console.log(`server running port ${port}`)
})