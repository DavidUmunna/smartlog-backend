"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    role: { type:String, enum: ['admin', 'staff'], default: "staff" },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });
const user = mongoose_1.default.model("user", userSchema);
exports.default = user;
