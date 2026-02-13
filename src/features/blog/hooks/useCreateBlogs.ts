import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../api/blog.api";

export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};
