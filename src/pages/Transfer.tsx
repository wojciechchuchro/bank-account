import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Transfer() {
  const navigate = useNavigate();
  const [receipentName, setReceipentName] = useState<string>("");
  const [toTheBill, setToTheBill] = useState<string>("");
  const [transferAmount, setTransferAmount] = useState<string>("");
  const [transactionTitle, setTransactionTitle] = useState<string>("");

  return (
    <div className="text-gray-200 m-3 flex justify-center items-center">
      <form action="" className="flex flex-col gap-2 w-1/2 items-center">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          id="receipents-name"
          type="text"
          placeholder="The recipient's name"
          onChange={(e) => {
            setReceipentName(e.target.value);
          }}
        />

        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          id="to-the-bill"
          type="text"
          placeholder="To the bill"
          onChange={(e) => {
            setToTheBill(e.target.value);
          }}
        />

        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          id="transfer-amount"
          type="text"
          placeholder="Transfer amount"
          onChange={(e) => {
            setTransferAmount(e.target.value);
          }}
        />

        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          id="transaction-title"
          type="text"
          placeholder="Transaction title"
          onChange={(e) => {
            setTransactionTitle(e.target.value);
          }}
        />

        <div className="flex justify-between items-center w-3/4">
          <button
            type="submit"
            className=" text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Send
          </button>

          <button
            onClick={() => {
              navigate("/");
            }}
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
