import { createContext } from "react";
export const AuthContext = createContext(null);
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/user/me", {
        withCredentials: true,
      });
      if (response.data.user) {
        setUserData(response.data.user);
      } else {
        setUserData(null);
      }
    } catch (error) {
      setUserData(null);
      console.log(error.message);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const signUpUser = async () => {
    try {
      const signUp = await axios.post(
        "http://localhost:5000/api/user/register",
        data,
        {
          withCredentials: true,
        },
      );
      await getUser(); //IMPORTANT
      console.log(signUp);
    } catch (error) {
      console.log(error.message);
    }
  };

  const loginUser = async () => {
    try {
      const login = await axios.post(
        "http://localhost:5000/api/user/login",
        data,
        {
          withCredentials: true,
        },
      );
      await getUser();
      console.log(login);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/logout",
        {},
        { withCredentials: true },
      );
      console.log("logout response:", res.data);
      setUserData(null);
      await getUser();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        logout,
        loginUser,
        signUpUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
