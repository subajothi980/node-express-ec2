const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.json("Node express ec2")
});

app.listen(5001, () => {
    console.log("Server is working")
})