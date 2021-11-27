import express from "express";
import profiles from "../models/profiles";

const route = express();

interface SwiperType {
  dir: "left" | "right" | "up" | "down";
  tiktokID: string;
}

route.post("/", async (req, res) => {
  const data: SwiperType = req.body;

  const reqProfile = await profiles.findOne({ tiktokID: data.tiktokID });
  if (reqProfile) {
    const prevVotes = reqProfile?.votes;
    if (data.dir === "right" || data.dir === "up") {
      await profiles.findOneAndUpdate(
        { tiktokID: data.tiktokID },
        {
          votes: prevVotes + 1,
        }
      );
    } else {
      await profiles.findOneAndUpdate(
        { tiktokID: data.tiktokID },
        {
          votes: prevVotes - 1,
        }
      );
    }
    res.send("Done");
  }
});

route.get("/", (_, res) => {
  res.send("IT IS hERE");
});

export default route;
