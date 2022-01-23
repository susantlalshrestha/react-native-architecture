import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { MenuContextProvider } from "../context";
import { MenuScreen } from "../screens";

type MenuStackParamList = {
  "main-menu-screen": undefined;
};

export type MenuStackScreenProps = NativeStackScreenProps<MenuStackParamList>;

const { Group, Navigator, Screen } = createNativeStackNavigator<MenuStackParamList>();

const MenuStack: FC = () => {
  return (
    <MenuContextProvider>
      <Navigator screenOptions={{ headerBackTitleVisible: false, headerTitleAlign: "center" }}>
        <Group screenOptions={{ headerShown: false }}>
          <Screen component={MenuScreen} name="main-menu-screen" />
        </Group>
      </Navigator>
    </MenuContextProvider>
  );
};

export default MenuStack;
