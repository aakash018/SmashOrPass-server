import express from "express";
import Profiles from "../models/profiles";

const route = express();

route.get("/", async (_, res) => {
  const tiktokIDs = [
    "__itscristy",
    "__riteeka",
    "anjali__luitel",
    "anji__lama",
    "babyyyriyaa",
    "denju__karki",
    "dikshya.moktan",
    "munathapa",
    "gracebhattarai",
    "nikita_hariramanani",
    "potaeto",
    "juna__crestha",
    "prakriti__shtha",
    "pranikash",
    "roshani_tha",
    "roshikaniraula",
    "seorn_n",
    "shila_thakali",
    "shraddhabista_",
  ];

  const isPrevSaved = await Profiles.find({});
  if (isPrevSaved.length === 0) {
    try {
      tiktokIDs.forEach(async (id) => {
        const profile = new Profiles({
          tiktokID: id,
          votes: 0,
        });
        await profile.save();
        res.send("SAVED");
      });
    } catch {
      res.send("ERROR SAVING");
    }
  } else {
    res.send("PREV SAVED...");
  }
});

route.post("/", (_, res) => {
  res.send("<h1>Hello</h1>");
});

export default route;
