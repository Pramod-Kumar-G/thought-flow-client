import { api } from "@/lib/api-client";

export const getAll = async () => {
  const res = await api.get("/blogs");
  return res.data;
};

export const createBlog = async (data: { title: string; content: string }) => {
  const res = await api.post("/blogs", data);
  return res;
};
