import axios from "axios";

const baseUrl = "http://localhost:3000/api/blogs";

export type Blog = {
  id: number;
  title: string;
  content: string;
};

export const getAll = async (): Promise<Blog[]> => {
  const res = await axios.get(baseUrl);
  return res.data;
};
