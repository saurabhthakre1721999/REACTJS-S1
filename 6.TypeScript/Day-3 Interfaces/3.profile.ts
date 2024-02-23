/**
 * @description {Har mard ki success ke peche ek awrat ka hath rehta hai. TS is that Awrat}
 */
interface UserProfile {
  name: string;
  city: string;
  pincode: number;
  isUserActive: boolean;
  isValid: "Yes" | "No";
}
const userProfile: UserProfile = {
  name: "Sumit",
  city: "Pune",
  pincode: 411057,
  isUserActive: true,
  isValid: "Yes",
};

userProfile.city = "Mumbai";
//userProfile.address = "XYZ";
