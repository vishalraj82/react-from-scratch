const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("/", (req, res) => {
    res.setHeader("content-type", "text/html");
    res.status(20).sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

app.listen(3000);
