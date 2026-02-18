import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../api/auth.api";

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
      localStorage.setItem("accessToken", data.accessToken);

      window.location.href = "/";
    },
  });
};
