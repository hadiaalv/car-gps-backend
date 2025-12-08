import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let currentLocation = { lat: null, lon: null, time: null };

app.post("/update-location", (req, res) => {
  const { lat, lon } = req.body;

  currentLocation = {
    lat,
    lon,
    time: Date.now()
  };

  console.log("Updated:", currentLocation);
  res.json({ status: "OK" });
});

app.get("/location", (req, res) => {
  res.json(currentLocation);
});

app.listen(10000, () => {
  console.log("Server running on port 10000");
});
