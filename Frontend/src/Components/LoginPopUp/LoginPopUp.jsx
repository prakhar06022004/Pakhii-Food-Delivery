import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const LoginPopUp = ({ setSignInPopUp }) => {
  const [currState, setCurrState] = useState("Login");
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="fixed inset-0 backdrop-blur-md flex items-start md:items-center justify-center z-9999 select-none p-1"
      onClick={() => setSignInPopUp(false)}
    >
      <div
        className="relative bg-white px-6 py-12 rounded-lg max-w-2xl w-full opacity-0 animate-[zoomIn_0.25s_ease-out_forwards] shadow-[0_0_20px_rgba(0,0,0,0.5)] h-screen md:h-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-3 top-3 cursor-pointer"
          onClick={() => setSignInPopUp(false)}
        >
          <RxCross2 size={25} />
        </button>

        <h1 className="text-4xl font-bold text-orange-500 mt-8 md:mt-0">
          {currState}...
        </h1>
        <form className="mt-7" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            {currState === "SignUp" && (
              <input
                type="text"
                placeholder="Enter your name"
                className="shadow-[0_0_15px_rgba(0,0,0,0.2)] p-3 rounded-2xl outline-none"
                value={signUpInfo.name}
                onChange={(e) =>
                  setSignUpInfo({ ...signUpInfo, name: e.target.value })
                }
              />
            )}

            <input
              type="email"
              placeholder="Enter your email"
              className="shadow-[0_0_15px_rgba(0,0,0,0.2)] p-3 rounded-2xl outline-none"
              value={currState === "Login" ? loginInfo.email : signUpInfo.email}
              onChange={(e) => {
                currState === "Login"
                  ? setLoginInfo({ ...loginInfo, email: e.target.value })
                  : setSignUpInfo({ ...signUpInfo, email: e.target.value });
              }}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="shadow-[0_0_15px_rgba(0,0,0,0.2)] p-3 rounded-2xl outline-none"
              value={
                currState === "Login" ? loginInfo.password : signUpInfo.password
              }
              onChange={(e) => {
                currState === "Login"
                  ? setLoginInfo({ ...loginInfo, password: e.target.value })
                  : setSignUpInfo({ ...signUpInfo, password: e.target.value });
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
        <div className="flex justify-center items-center mt-5">
          <p className="text-[17px] mr-1 text-gray-700">
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
