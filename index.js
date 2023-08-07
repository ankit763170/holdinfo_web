require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser=require('body-parser');
const path = require('path')
const connect = require("./config/db");
const cryptoRouter = require("./routes/crypto.route");
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());

mongoose.set("strictQuery", false);

app.use("/crypto", cryptoRouter);


app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, async () => {
	connect()
	console.log(`Listening at http://localhost:${port}`);
});
