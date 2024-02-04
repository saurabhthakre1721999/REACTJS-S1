import Lottie from "lottie-react";
import NoInternetAnimation from "../../../assets/animations/no-internet.json";
import {
  NoNetworkViewContainer,
  NoNetworkViewElement,
} from "./NotNetworkView.Styles";

const NoNetworkView = () => {
  return (
    <NoNetworkViewContainer>
      <NoNetworkViewElement>
        <Lottie animationData={NoInternetAnimation} loop={true} />
        <p>No Internet Available 🙄</p>
      </NoNetworkViewElement>
    </NoNetworkViewContainer>
  );
};

export default NoNetworkView;
