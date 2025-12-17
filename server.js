const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let currentLocation = { lat: 0, lon: 0 };

app.post("/update", (req, res) => {
    const { lat, lon } = req.body;
    currentLocation = { lat, lon };
    res.json({ status: "updated" });
});

app.get("/location", (req, res) => {
    res.json(currentLocation);
});

app.get("/map", (req, res) => {
    res.sendFile(__dirname + "/map.html");
});

app.listen(10000, () => console.log("Server running on port 10000"));
