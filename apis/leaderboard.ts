import express from "express";
import profiles from "../models/profiles";

const route = express();

route.get("/", async (_, res) => {
  try {
    const listOfTopGirls = await profiles
      .find({})
      .sort([["votes", -1]])
      .limit(6)
      .exec();
    res.json(listOfTopGirls);
  } catch {
    res.json({
      ok: false,
      message: "Error fetching data",
    });
  }
});

export default route;
