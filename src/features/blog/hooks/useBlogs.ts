import { useQuery } from "@tanstack/react-query";
import { getAll } from "@/features/blog/api/blog.api";

export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: getAll,
  });
};
