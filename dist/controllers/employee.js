"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateuser = exports.getusers = void 0;
const user_1 = __importDefault(require("../models/user"));
//const router=express.Router()
const getusers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.id;
        const User = yield user_1.default.findById({ email: email });
        User ? res.status(200).json(User) : res.status(404).json({ message: "User not found" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred" });
    }
});
exports.getusers = getusers;
const updateuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.id;
        const { password } = req.body;
        const User = user_1.default.findOneAndUpdate({ email: email }, { password: password });
        if (!User) {
            res.status(401).json({ message: "usr does not exist" });
        }
        return res.status(201).json({ message: "user password updated successfully" });
    }
    catch (err) {
        console.error("server error", err);
        res.status(501).json({ message: "server error" });
    }
});
exports.updateuser = updateuser;
