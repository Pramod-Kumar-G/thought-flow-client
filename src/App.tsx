import LoginPage from "./pages/LoginPage";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import AddBlog from "./pages/AddBlog";
import PrivateRoutes from "./pages/PrivateRoutes";
import type { AuthUser } from "./types/user";
import Navbar from "./components/Navbar";

const App = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    axios
      .get<AuthUser>(`${API_BASE_URL}/users/profile`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [API_BASE_URL]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoutes user={user} />}>
          <Route index element={<Home />} />
          <Route path="/new-blog" element={<AddBlog />} />
        </Route>

        <Route
          path="/login"
          element={user ? <Navigate to={"/"} /> : <LoginPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
