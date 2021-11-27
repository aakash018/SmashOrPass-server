"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profiles_1 = __importDefault(require("../models/profiles"));
const route = (0, express_1.default)();
route.post("/", async (req, res) => {
    const data = req.body;
    const reqProfile = await profiles_1.default.findOne({ tiktokID: data.tiktokID });
    if (reqProfile) {
        const prevVotes = reqProfile === null || reqProfile === void 0 ? void 0 : reqProfile.votes;
        if (data.dir === "right" || data.dir === "up") {
            await profiles_1.default.findOneAndUpdate({ tiktokID: data.tiktokID }, {
                votes: prevVotes + 1,
            });
        }
        else {
            await profiles_1.default.findOneAndUpdate({ tiktokID: data.tiktokID }, {
                votes: prevVotes - 1,
            });
        }
        res.send("Done");
    }
});
route.get("/", (_, res) => {
    res.send("IT IS hERE");
});
exports.default = route;
//# sourceMappingURL=swiper.js.map