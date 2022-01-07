import { NextFunction, Request, Response } from 'express';
import { queryAllPost, queryOnePost } from './services';

export const getAllPost = (_req: Request, res: Response) => {
  const posts = queryAllPost();
  res.status(200).json(posts);
};

export const getOnePost = (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = queryOnePost(Number(req.params.id));
    if (!post) {
      throw new Error('Post not availabe');
    }
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};
