"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profiles_1 = __importDefault(require("../models/profiles"));
const route = (0, express_1.default)();
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
    const isPrevSaved = await profiles_1.default.find({});
    if (isPrevSaved.length === 0) {
        try {
            tiktokIDs.forEach(async (id) => {
                const profile = new profiles_1.default({
                    tiktokID: id,
                    votes: 0,
                });
                await profile.save();
                res.send("SAVED");
            });
        }
        catch (_a) {
            res.send("ERROR SAVING");
        }
    }
    else {
        res.send("PREV SAVED...");
    }
});
route.post("/", (_, res) => {
    res.send("<h1>Hello</h1>");
});
exports.default = route;
//# sourceMappingURL=profiles.js.map