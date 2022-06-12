const express = require('express');
const port = 8000;
const app =express();
const path = require('path');
const xRouter = require("./routes/blog");
app.use(express.json());
app.get("/api" ,(req, res, next) => {
    res.status(200).send("in api url");
})
app.use("/api/blogs", xRouter);
app.listen(port);