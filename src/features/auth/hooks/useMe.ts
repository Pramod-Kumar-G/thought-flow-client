import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/auth.api";

export const useMe = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getMe,
    staleTime: 15 * 60 * 1000,
    retry: false,
    refetchOnWindowFocus: false,
  });
};
