import { Home, Notification, Banknotes, User, Logout } from "../images/Icons";
import { useNavigate } from "react-router-dom";
export default function NavBar({ money }: { money: number }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center w-full text-gray-300 -2 border-solid border-b">
      {/* <div className="pb-5">
        <User />
        <div>Account balance</div>
        <div>
          {money}
          <span className="text-xs pl-1 text-gray-400">PLN</span>
        </div>
      </div> */}
      <div className="flex">
        <div className="p-2 ">
          <div
            onClick={() => navigate("/home")}
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
            <div>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
}
