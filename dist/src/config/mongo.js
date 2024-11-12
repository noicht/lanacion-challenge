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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const constants_1 = require("./constants");
const dbConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(constants_1.DB_URI);
        yield (0, mongoose_1.connect)(constants_1.DB_URI);
        console.log("DB initialized successfully.");
    }
    catch (error) {
        throw error;
    }
});
exports.default = dbConnect;
