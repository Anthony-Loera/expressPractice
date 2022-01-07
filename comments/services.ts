import axios from 'axios';

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export const queryAllComments = async () => {
  const url = 'https://jsonplaceholder.typicode.com/comments';
  const response = await axios.get<Comment[]>(url);
  const comments = response.data;
  return comments;
};

export const queryOneComments = async (id: number) => {
  const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const response = await axios.get<Comment>(url);
  const comment = response.data;
  return comment;
};
