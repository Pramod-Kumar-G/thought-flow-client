import LoginPage from "./pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import axios from "axios";

interface UserType {
  id: number;
  uuid: string;
  username: string;
  passwordHash: string;
  email: string;
}

const App = () => {
  const [user, setUser] = useState<UserType | null>(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    axios
      .get<UserType>(`${API_BASE_URL}/users/profile`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      });
  }, [API_BASE_URL]);
  return (
    <div>
      <div className="text-3xl">ThoughFlow</div>
      <div>{user?.username}</div>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to={"/"} /> : <LoginPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
