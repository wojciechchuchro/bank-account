import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { User, Arrows, Card, Clipboard, LightBulb } from "../images/Icons";
export interface IHomePageProps {
  money: number;
}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const auth = getAuth();
  const { money } = props;
  return (
    <div className="text-gray-200 m-3">
      <div className="pb-5">
        <div className="border-solid border 3 border-white p-3">
          <div>
            <div className="font-bold text-2xl">Type of account</div>
            <div className="flex text-sm justify-items-center pt-2">
              <Clipboard />
              82 1149 2034 0000 3424 5234 2342
            </div>
          </div>
          <div className="flex-row justify-center pt-8">
            <div>Available funds</div>
            <div className="font-bold text-3xl">
              {money}
              <span className="text-xs pl-1">PLN</span>
            </div>

            <div className="text-sm pt-3">
              Expenses till (currentdate): money spended
            </div>
            <button className="rounded-xl mt-5 p-1 px-3 flex align-between text-slate-900 bg-gray-200">
              <Arrows />
              TRANSFER
            </button>
          </div>
        </div>

        <div className="flex-row">
          <div className="font-bold py-3 text-xl">HISTORY</div>

          <div className="text-sm flex border-solid border-b-[1px] border-white">
            TOODAY
          </div>

          <div className="py-3 flex border-solid border-b-[1px] border-white justify-between">
            <div className="flex">
              <Arrows />
              <div className=" pl-5">TRANSACTION</div>
            </div>
            <div>+834,34 PLN</div>
          </div>

          <div className="py-3 flex border-solid border-b-[1px] border-white justify-between">
            <div className="flex">
              <Card />
              <div className=" pl-5">PAYMENT WITH CARD</div>
            </div>
            <div>-24,58 PLN</div>
          </div>
        </div>

        <div className="border-solid border 3 border-white p-3">
          <div className="font-bold pb-5">MESSAGES</div>
          <div className="flex">
            <LightBulb />
            Beware scammers are also preparing for the Christmas.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
