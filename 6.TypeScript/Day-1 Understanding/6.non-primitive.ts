interface IProfile {
  name: string;
  city: string;
  state?: string;
  isActive: "on" | "off";
}

const profileV3: IProfile = {
  name: "Vikas",
  city: "Pune",
  isActive: "off",
};

//console.log(profileV3.city.something);
