const express = require("express");
const cors = require("cors");
const multer = require("multer");
const userRouter = require("./routes/userRouter");
require("dotenv").config();


const upload = multer();


const app = express();
app.use(cors());
app.use(express.json());






app.use("/api/users", upload.single("image"), userRouter);




const server = app.listen(process.env.Port, ()=>{
    console.log("Started listening on " + process.env.Port);
})