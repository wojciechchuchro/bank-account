import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyAccount from "./pages/MyAccount";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import Notification from "./pages/Notification";
import BankAccounts from "./pages/BankAccounts";
import AuthRoute from "./components/AuthRoute";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { config } from "./config";
import Transfer from "./pages/Transfer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./lib/firebase";
initializeApp(config.firebaseConfig);

type User = {
  name: string;
  surname: string;
  isAdult: boolean;
  money: number;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  function getUsers() {
    const usersCollectionRef = collection(db, "users");
    getDocs(usersCollectionRef)
      .then((response) => {
        const user: any = response.docs.map((doc) => ({
          name: doc.data().name,
          surname: doc.data().surname,
          money: doc.data().money,
          isAdult: doc.data().isAdult,
          id: doc.id,
        }));
        setUsers(user);
      })
      .catch((error) => console.log(error.message));
  }
  if (!users[0]) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
  return (
    <div className="bg-slate-900 h-screen">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<AuthRoute>{<Home money={users[0].money} />}</AuthRoute>}
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
          <Route
            path="/transfer"
            element={
              <AuthRoute>
                <Transfer />
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
