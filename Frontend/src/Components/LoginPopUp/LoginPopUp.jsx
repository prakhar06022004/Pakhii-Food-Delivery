  import { useState } from "react";
  import { RxCross2 } from "react-icons/rx";
  import { MdLogin } from "react-icons/md";
  import { LiaSignInAltSolid } from "react-icons/lia";
  import { useContext } from "react";
  import { AuthContext } from "../../Context/AuthContext";
  const LoginPopUp = ({ setSignInPopUp }) => {
    const [currState, setCurrState] = useState("Login");
    const [error, setError] = useState({ name: "", email: "", password: "" });
    const { loginUser, signUpUser } = useContext(AuthContext);
    const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
    });
    const handleSubmit = (e) => {
      e.preventDefault();
      let newErrors = {
        name: "",
        email: "",
        password: "",
      };

      if (currState === "SignUp" && !data.name) {
        newErrors.name = "Please enter your name.";
      }

      if (!data.email) {
        newErrors.email = "Please enter your email address.";
      }

      if (!data.password) {
        newErrors.password = "Please enter your password.";
      }

      setError(newErrors);

      // stop if error
      if (newErrors.name || newErrors.email || newErrors.password) {
        return;
      }

      if (currState === "SignUp") {
        signUpUser({ setData, data });
      } else {
        loginUser({ setData, data });
      }
    };

    const handleChange = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    };

    return (
      <div
        className="fixed inset-0 backdrop-blur-md flex items-start md:items-center justify-center z-9999 select-none p-1 overflow-y-scroll"
        onClick={() => setSignInPopUp(false)}
      >
        <div
          className="relative bg-white px-6 py-12 rounded-lg max-w-2xl w-full opacity-0 animate-[zoomIn_0.25s_ease-out_forwards] shadow-[0_0_20px_rgba(0,0,0,0.5)] max-h-screen md:h-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute right-5 top-5 cursor-pointer"
            onClick={() => setSignInPopUp(false)}
          >
            <RxCross2 size={28} />
          </button>

          <h1 className="text-4xl font-bold text-orange-500 mt-8 md:mt-0">
            {currState === "Login" ? (
              <span className="flex items-center gap-3">
                <MdLogin />
                {currState}
              </span>
            ) : (
              <span className="flex items-center gap-3">
                <LiaSignInAltSolid />
                {currState}
              </span>
            )}
          </h1>

          <form className="mt-7" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {currState === "SignUp" && (
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="shadow-[0_0_15px_rgba(0,0,0,0.2)] p-3 rounded-2xl outline-none"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
              )}

              {error.name && (
                <p className="text-red-500 relative -top-4 left-2">
                  {error.name}
                </p>
              )}

              <input
                type="email"
                placeholder="Enter your email"
                className="shadow-[0_0_15px_rgba(0,0,0,0.2)] p-3 rounded-2xl outline-none"
                name="email"
                value={currState === "Login" ? data.email : data.email}
                onChange={handleChange}
              />
              {error.email && (
                <p className="text-red-500 relative -top-4 left-2">
                  {error.email}
                </p>
              )}

              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                className="shadow-[0_0_15px_rgba(0,0,0,0.2)] p-3 rounded-2xl outline-none"
                value={currState === "Login" ? data.password : data.password}
                onChange={handleChange}
              />
              {error.password && (
                <p className="text-red-500 relative -top-4 left-2">
                  {error.password}
                </p>
              )}

              <button className="bg-orange-400 text-white p-2 rounded-2xl cursor-pointer hover:bg-amber-500 duration-200">
                {currState === "Login" ? "Login" : "SignUp"}
              </button>
            </div>
          </form>

          <p className="underline text-gray-700 cursor-pointer p-2 text-right">
            Forgot password?
          </p>
          <p className="text-center">OR</p>
          <div className="flex justify-center items-center mt-5">
            <p className="text-[17px] mr-1 text-gray-700">
              {currState === "Login"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>

            <span
              onClick={() => {
                setCurrState(currState === "Login" ? "SignUp" : "Login");
                setData({
                  name: "",
                  email: "",
                  password: "",
                });
                setError("");
              }}
              className="text-lg underline cursor-pointer text-orange-500"
            >
              {currState === "Login" ? "SignUp" : "LogIn"}
            </span>
          </div>
        </div>
      </div>
    );
  };

  export default LoginPopUp;
