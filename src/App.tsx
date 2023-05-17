import React from "react";
import { Provider } from "react-redux";
import { store, useAppSelector } from "./redux/store";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { Toaster } from "react-hot-toast";
import Signup from "./components/SignUp/Signup";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import "./App.css";
import { isUserAuthenticated } from "./redux/SignupSlice/SignupSlice";

const persistor = persistStore(store);

const App = () => {
  const isAuthenticated = useAppSelector(isUserAuthenticated);
  console.log(isAuthenticated);

  return (
    <>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route
                path="/"
                element={isAuthenticated ? <Navigate to="/home" /> : <Signup />}
              />
              <Route
                path="/signup"
                element={isAuthenticated ? <Navigate to="/home" /> : <Signup />}
              />
              <Route
                path="/home"
                element={isAuthenticated ? <Home /> : <Navigate to="/signup" />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
      <Toaster />
    </>
  );
};

export default App;
