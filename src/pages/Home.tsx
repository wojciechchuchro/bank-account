import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { User } from "../images/Icons";
export interface IHomePageProps {
  money: number;
}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const auth = getAuth();
  const { money } = props;
  return (
    <div className="w-3/4 text-gray-400">
      <div className="pb-5">
        <User />
        <div>Account balance</div>
        <div>
          {money}
          <span className="text-xs pl-1 text-gray-400">PLN</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
