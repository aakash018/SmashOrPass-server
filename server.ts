import route from "./apis/swiper";
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

app.use("/swiper", route);

app.get("/", (_, res) => {
  res.send(`SERVER IS RUNNING ON ${PORT}`);
});

app.listen(PORT, () => {
  console.log("RUNNING AT PORT", PORT);
});
