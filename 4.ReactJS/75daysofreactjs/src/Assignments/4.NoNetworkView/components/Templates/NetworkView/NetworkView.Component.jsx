import useIsOnline from "../../../hooks/useOnline";
import NoNetworkView from "../../Organisms/NoNetworkView/NoNetworkView.Component";

const NetworkView = ({ children }) => {
  const isOnline = useIsOnline();

  return isOnline ? children : <NoNetworkView />;
};

export default NetworkView;
