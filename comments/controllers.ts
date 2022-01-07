import { NextFunction, Request, Response } from 'express';
import { queryAllComments, queryOneComments } from './services';

export const getAllComments = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const comments = await queryAllComments();
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

export const getOneComments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const comment = await queryOneComments(Number(req.params.id));
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};
