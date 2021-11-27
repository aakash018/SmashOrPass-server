import express from "express";

const route = express();

route.post("/", (req, res) => {
  console.log(req.body);

  res.send("Done");
});

route.get("/", (_, res) => {
  res.send("IT IS hERE");
});

export default route;
