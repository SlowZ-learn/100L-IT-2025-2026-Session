const express = require("express");
const cors = require("cors");
const { DatabaseSync } = require("node:sqlite");

const app = express();

const db = new DatabaseSync("./tasks.db");

app.use(cors());

const PORT = 3000;

app.get("/tasks", (req, res) => {
    const task = ["something", "anything"]
    
    res.json(task)
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${3000}`);
});