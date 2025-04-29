"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userLocationSchema = new mongoose_1.default.Schema({
    userId: String,
    latitude: Number,
    longitude: Number,
    timestamp: { type: Date, default: Date.now },
});
const location = mongoose_1.default.model("location", userLocationSchema);
exports.default = location;
