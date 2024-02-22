import { createContext, useCallback, useContext, useState } from "react";
import {
  clearCookie,
  getDataFromCookie,
  setDataInCookie,
} from "../services/cookies.service";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const loadSession = () => {
    try {
      return JSON.parse(getDataFromCookie("profile"));
    } catch (err) {
      return null;
    }
  };
  const [userProfile, setUserProfile] = useState(loadSession());

  console.log({ userProfile });

  const onSignOut = useCallback(() => {
    clearCookie();
  }, []);

  const onSaveSession = useCallback(
    ({ userToken, refreshToken, ...profile }) => {
      setDataInCookie("isLoggedIn", true);
      setDataInCookie("userToken", userToken);
      setDataInCookie("refreshUserToken", refreshToken);
      setDataInCookie("profile", JSON.stringify(profile));
      setUserProfile(profile);

      console.log({ profile });
    },
    []
  );

  return (
    <authContext.Provider value={{ userProfile, onSignOut, onSaveSession }}>
      {children}
    </authContext.Provider>
  );
};
export default AuthProvider;

export const useAuth = () => {
  return useContext(authContext);
};
