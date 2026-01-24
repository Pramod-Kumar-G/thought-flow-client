import axios from "axios";
import type { Blog } from "@/types/blog";

const baseUrl = "http://localhost:3000/api/blogs";

export const getAll = async (): Promise<Blog[]> => {
  const res = await axios.get(baseUrl);
  return res.data;
};
