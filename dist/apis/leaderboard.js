"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profiles_1 = __importDefault(require("../models/profiles"));
const route = (0, express_1.default)();
route.get("/", async (_, res) => {
    try {
        const listOfTopGirls = await profiles_1.default
            .find({})
            .sort([["votes", -1]])
            .limit(6)
            .exec();
        res.json(listOfTopGirls);
    }
    catch (_a) {
        res.json({
            ok: false,
            message: "Error fetching data",
        });
    }
});
exports.default = route;
//# sourceMappingURL=leaderboard.js.map