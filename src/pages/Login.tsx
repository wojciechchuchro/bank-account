import React, { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Google } from "../images/Icons";
export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <div className="text-gray-400 flex justify-center">
      <button
        className="w-80 text-black font-bold bg-white rounded-md flex items-center justify-between pr-8 mt-20"
        onClick={() => signInWithGoogle()}
        disabled={authing}
      >
        <Google />
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginPage;
