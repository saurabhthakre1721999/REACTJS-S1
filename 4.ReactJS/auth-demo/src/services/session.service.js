import {
  clearAllCookies,
  getDataFromCookie,
  setDataInCookie,
} from "./cookies.service";

export const getLoggedInProfile = () => {
  try {
    return JSON.parse(getDataFromCookie("profile"));
  } catch (err) {
    return null;
  }
};

export const saveSession = ({ userToken, refreshToken, ...profile }) => {
  setDataInCookie("isLoggedIn", true);
  setDataInCookie("userToken", userToken);
  setDataInCookie("refreshUserToken", refreshToken);
  setDataInCookie("profile", JSON.stringify(profile));
};

export const clearSession = () => {
  clearAllCookies();
};
