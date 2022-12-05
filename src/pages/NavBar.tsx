import { Home, Notification, Banknotes, User, Logout } from "../images/Icons";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
export default function NavBar() {
  const auth = getAuth();
  const navigate = useNavigate();
  return (
    <div className="flex justify-center w-full text-gray-300 -2 border-solid border-b">
      <div className="flex">
        <div className="p-2 ">
          <div
            onClick={() => navigate("/")}
            className="flex p-1 cursor-pointer hover:bg-slate-800 rounded-lg"
          >
            <span className="pr-3">
              <Home />
            </span>
            <div>Home</div>
          </div>
        </div>
        <div className="p-2">
          <div
            onClick={() => navigate("/myaccount")}
            className="flex p-1 cursor-pointer hover:bg-slate-800 rounded-lg"
          >
            <span className="pr-3">
              <User />
            </span>
            <div>My Account</div>
          </div>
        </div>
        <div className="p-2">
          <div
            onClick={() => navigate("/bankaccounts")}
            className="flex  p-1 cursor-pointer hover:bg-slate-800 rounded-lg"
          >
            <span className="pr-3">
              <Banknotes />
            </span>
            <div>Bank Accounts</div>
          </div>
        </div>
        <div className="p-2">
          <div
            onClick={() => navigate("/notification")}
            className="flex p-1 cursor-pointer hover:bg-slate-800 rounded-lg"
          >
            <span className="pr-3">
              <Notification />
            </span>
            <div>Notification</div>
          </div>
        </div>
        <div className="p-2">
          <div className="flex p-1 cursor-pointer hover:bg-slate-800 rounded-lg">
            <span className="pr-3">
              <Logout />
            </span>
            <button onClick={() => signOut(auth)}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
