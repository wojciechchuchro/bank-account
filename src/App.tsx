import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyAccount from "./pages/MyAccount";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import Notification from "./pages/Notification";
import BankAccounts from "./pages/BankAccounts";
import AuthRoute from "./components/AuthRoute";
import Login from "./pages/Login";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { config } from "./config";

initializeApp(config.firebaseConfig);

function App() {
  const [money, setMoney] = useState<number>(15000);
  return (
    <div className="bg-slate-900 h-screen">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <Home money={money} />
              </AuthRoute>
            }
          />
          <Route
            path="/myaccount"
            element={
              <AuthRoute>
                <MyAccount />
              </AuthRoute>
            }
          />
          <Route
            path="/bankaccounts"
            element={
              <AuthRoute>
                <BankAccounts />
              </AuthRoute>
            }
          />
          <Route
            path="/notification"
            element={
              <AuthRoute>
                <Notification />
              </AuthRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
