import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import Page from "./components/Page";
import Navbar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
