import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const LoginPopUp = ({ setSignInPopUp }) => {
  const [currState, setCurrState] = useState("Login");
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [singUpInfo, setSingUpInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div
      className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-9999 select-none"
      onClick={() => setSignInPopUp(false)}
    >
      <div
        className="relative bg-white p-5 rounded-lg shadow-xl max-w-2xl w-full 
               opacity-0 animate-[zoomIn_0.25s_ease-out_forwards]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-3 top-3 cursor-pointer"
          onClick={() => setSignInPopUp(false)}
        >
          <RxCross2 size={25} />
        </button>

        <h1 className="text-4xl font-bold text-green-600">{currState}...</h1>
        <form className="mt-7">
          <div className="flex flex-col gap-6">
            {currState === "SignUp" && (
              <input
                type="text"
                placeholder="Enter your name"
                className="shadow-[0_0_15px_rgba(0,0,0,0.2)] py-2 px-4 rounded-2xl outline-none"
                value={singUpInfo.name}
                onChange={(e) => setSingUpInfo(e.target.value)}
              />
            )}

            <input
              type="email"
              placeholder="Enter your email"
              className="shadow-[0_0_15px_rgba(0,0,0,0.2)] py-2 px-4 rounded-2xl outline-none"
              value={currState === "Login" ? loginInfo.email : singUpInfo.email}
              onChange={(e) => {
                currState === "Login"
                  ? setLoginInfo(e.target.value)
                  : setSingUpInfo(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="shadow-[0_0_15px_rgba(0,0,0,0.2)] py-2 px-4 rounded-2xl outline-none"
              value={
                currState === "Login" ? loginInfo.password : singUpInfo.password
              }
              onChange={(e) => {
                currState === "Login"
                  ? setLoginInfo(e.target.value)
                  : setSingUpInfo(e.target.value);
              }}
            />

            <button className="bg-orange-400 text-white p-2 rounded-2xl cursor-pointer hover:bg-amber-500 duration-200">
              {currState === "Login" ? "Login" : "SignUp"}
            </button>
          </div>
        </form>

        <p className="underline text-gray-700 cursor-pointer p-2 text-right">
          Forget password?
        </p>
        <p className="text-center">OR</p>
        <div className="flex justify-center items-center mt-2">
          <p className="text-[16px] mr-1 text-gray-700">
            {currState === "Login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>

          <span
            onClick={() =>
              setCurrState(currState === "Login" ? "SignUp" : "Login")
            }
            className="text-sm underline cursor-pointer"
          >
            {currState === "Login" ? "SignUp" : "LogIn"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPopUp;
