import { useState } from "react";

interface UserProfile {
  name: string;
  country: string;
  pincode: number;
}
const Profile = (): JSX.Element => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "Ravi",
    country: "Bharat",
    pincode: 411057,
  });

  const onUpdateName = (): void => {
    setUserProfile((prev) => ({ ...prev, name: "Rahul" }));
  };

  return (
    <>
      <h1>Profile: {userProfile.name}</h1>
      <button onClick={onUpdateName}>Update Name to Rahul</button>
    </>
  );
};

export default Profile;
