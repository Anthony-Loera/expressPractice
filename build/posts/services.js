"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryOnePost = exports.queryAllPost = void 0;
const data_json_1 = __importDefault(require("../data.json"));
const queryAllPost = () => {
    return data_json_1.default;
};
exports.queryAllPost = queryAllPost;
const queryOnePost = (id) => {
    const post = data_json_1.default.find((p) => p.id === id);
    return post;
};
exports.queryOnePost = queryOnePost;
