const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("AI Coding Agent Frontend");
});

app.listen(3000, () => {
    console.log("Frontend running on port 3000");
});