/* eslint-disable no-console */
import express from 'express';
import { errorHandler } from './middleware/errorHandler';
import { notFound } from './middleware/notFound';
import postRouter from './posts/routes';
import commentsRouter from './comments/routes';

const app = express();

app.use('/posts', postRouter);
app.use('/comments', commentsRouter);
app.use(errorHandler);
app.use(notFound);

app.listen(8080, () => {
  console.log('listening on port http://localhost:8080');
});
