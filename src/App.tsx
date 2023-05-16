import Signup from "./components/SignUp/Signup";
import "./App.css";
import { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    // Nested routing 👇️
    <Route path="/" element={<Outlet />}>
      <Route index element={<Signup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      {/* 👇️ only match this when no other routes match  */}
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const App = (): JSX.Element => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default App;
