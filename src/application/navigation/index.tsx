import { createNavigationContainerRef, NavigationContainer } from "@react-navigation/native";
import { FC } from "react";
import RootStack, { RootStackParamList } from "./root-stack";

const navigation = createNavigationContainerRef<RootStackParamList>();

export const getRootNavigation = () => navigation;

const AppNavigation: FC = () => {
  return (
    <NavigationContainer ref={navigation}>
      <RootStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
