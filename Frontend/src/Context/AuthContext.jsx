import { createContext, useMemo } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [signInPopUp, setSignInPopUp] = useState(false);
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
    } finally {
      setIsAuthLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const signUpUser = async ({ setData, data }) => {
    try {
      const signUp = await axios.post(
        "http://localhost:5000/api/user/register",
        data,
        {
          withCredentials: true,
        },
      );
      setData({
        name: "",
        email: "",
        password: "",
      });

      console.log(signUp);
    } catch (error) {
      console.log(error.message);
    }
  };

  const loginUser = async ({ setData, data }) => {
    try {
      const login = await axios.post(
        "http://localhost:5000/api/user/login",
        data,
        {
          withCredentials: true,
        },
      );
      await getUser();
      setData({
        email: "",
        password: "",
      });
      setSignInPopUp(false);
      console.log(login);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/user/logout",
        {},
        { withCredentials: true },
      );
      await getUser();
      setUserData(null);
      setSignInPopUp(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const AuthContextValue = useMemo(
    () => ({
      userData,
      setUserData,
      logout,
      loginUser,
      signUpUser,
      signInPopUp,
      setSignInPopUp,
      isAuthLoading,
    }),
    [userData, signInPopUp, isAuthLoading],
  );

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
