import axios from "axios";

const baseUrl = "http://localhost:3000/api/auth/login";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const res = await axios.post(
    baseUrl,
    { email, password },
    { withCredentials: true },
  );
  return res.data;
};
