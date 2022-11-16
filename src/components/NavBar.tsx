import { Home, Notification, Banknotes, User, Logout } from "../images/Icons";

export default function NavBar({ money }: { money: number }) {
  return (
    <div className="bg-slate-900 w-full h-screen">
      <div className="flex-col w-1/6 text-gray-300 h-screen p-2 border-solid border-r">
        <div className="pb-5">
          <User />

          <div>Account balance</div>
          <div>
            {money}
            <span className="text-xs pl-1 text-gray-400">PLN</span>
          </div>
        </div>
        <div className="flex-col">
          <div className="pb-2 ">
            <div className="flex p-1 cursor-pointer hover:bg-slate-800 rounded-lg">
              <span className="pr-3">
                <Home />
              </span>
              <div>Home</div>
            </div>
          </div>
          <div className="pb-2">
            <div className="flex p-1 cursor-pointer hover:bg-slate-800 rounded-lg">
              <span className="pr-3">
                <User />
              </span>
              <div>My Account</div>
            </div>
          </div>
          <div className="pb-2">
            <div className="flex p-1 cursor-pointer hover:bg-slate-800 rounded-lg">
              <span className="pr-3">
                <Banknotes />
              </span>
              <div>Bank Accounts</div>
            </div>
          </div>
          <div className="pb-2">
            <div className="flex p-1 cursor-pointer hover:bg-slate-800 rounded-lg">
              <span className="pr-3">
                <Notification />
              </span>
              <div>Notification</div>
            </div>
          </div>
          <div className="pb-2">
            <div className="flex p-1 cursor-pointer hover:bg-slate-800 rounded-lg">
              <span className="pr-3">
                <Logout />
              </span>
              <div>Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
