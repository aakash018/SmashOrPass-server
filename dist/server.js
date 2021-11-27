"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swiper_1 = __importDefault(require("./apis/swiper"));
const profiles_1 = __importDefault(require("./apis/profiles"));
const leaderboard_1 = __importDefault(require("./apis/leaderboard"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
const PORT = 5000;
if (process.env.DATABASE_URI) {
    mongoose_1.default.connect(process.env.DATABASE_URI, (e) => {
        if (e) {
            console.log("Problem connecting with Database", e);
        }
        else {
            console.log("Connected with MongoDB");
        }
    });
}
else {
    console.log("ENV for DATABASE not found :(");
}
app.use("/swiper", swiper_1.default);
app.use("/profile", profiles_1.default);
app.use("/leaderboard", leaderboard_1.default);
app.get("/", (_, res) => {
    res.send(`<h1>SERVER IS RUNNING ON ${PORT}</h1>`);
});
app.listen(PORT, () => {
    console.log("RUNNING AT PORT", PORT);
});
//# sourceMappingURL=server.js.map