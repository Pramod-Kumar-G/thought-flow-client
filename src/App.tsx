import LoginPage from "./features/auth/routes/LoginPage";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";
import PrivateRoutes from "./pages/PrivateRoutes";
import Navbar from "./components/Navbar";
import AddBlog from "./features/blog/routes/AddBlog";
import { useMe } from "./features/auth/hooks/useMe";

const App = () => {
  const { data: user, isLoading } = useMe();

  if (isLoading) {
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
