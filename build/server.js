"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorHandler_1 = require("./middleware/errorHandler");
const notFound_1 = require("./middleware/notFound");
const routes_1 = __importDefault(require("./posts/routes"));
const app = (0, express_1.default)();
app.use("/posts", routes_1.default);
app.use(errorHandler_1.errorHandler);
app.use(notFound_1.notFound);
app.listen(8080, () => {
    console.log("listening on port http://localhost:8080");
});
