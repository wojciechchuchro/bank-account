import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyAccount from "./components/MyAccount";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Notification from "./components/Notification";
import BankAccounts from "./components/BankAccounts";
import { useState } from "react";
function App() {
  const [money, setMoney] = useState<number>(15000);
  return (
    <div className="bg-slate-900 h-screen">
      <BrowserRouter>
        <NavBar money={money} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/bankaccounts" element={<BankAccounts />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
