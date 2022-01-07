"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOnePost = exports.getAllPost = void 0;
const services_1 = require("./services");
const getAllPost = (req, res) => {
    const posts = (0, services_1.queryAllPost)();
    res.status(200).json(posts);
};
exports.getAllPost = getAllPost;
const getOnePost = (req, res, next) => {
    try {
        const post = (0, services_1.queryOnePost)(Number(req.params.id));
        if (!post) {
            throw new Error("Post not availabe");
        }
        res.status(200).json(post);
    }
    catch (error) {
        next(error);
    }
};
exports.getOnePost = getOnePost;
