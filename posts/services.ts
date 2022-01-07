import data from '../data.json';

export const queryAllPost = () => data;

export const queryOnePost = (id: Number) => {
  const post = data.find((p) => p.id === id);
  return post;
};
