import { Dimensions, StatusBar } from "react-native";

const useHeaderHeight = () => {
  const screenHeight = Dimensions.get("screen").height;
  const statusBarHeight = StatusBar.currentHeight || 0;
  return 0.1 * screenHeight - statusBarHeight;
};

export default useHeaderHeight;
