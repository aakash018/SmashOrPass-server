import swiper from "./apis/swiper";
import profile from "./apis/profiles";
import leaderboard from "./apis/leaderboard";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

const PORT = 5000;

//Database Init
if (process.env.DATABASE_URI) {
  mongoose.connect(process.env.DATABASE_URI, (e) => {
    if (e) {
      console.log("Problem connecting with Database", e);
    } else {
      console.log("Connected with MongoDB");
    }
  });
} else {
  console.log("ENV for DATABASE not found :(");
}

app.use("/swiper", swiper);
app.use("/profile", profile);
app.use("/leaderboard", leaderboard);

app.get("/", (_, res) => {
  res.send(`<h1>SERVER IS RUNNING ON ${PORT}</h1>`);
});

app.listen(PORT, () => {
  console.log("RUNNING AT PORT", PORT);
});
