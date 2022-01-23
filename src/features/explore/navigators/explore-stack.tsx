import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { ExploreScreen } from "../screens";

type ExploreStackParamList = {
  "main-explore-screen": undefined;
};

export type ExploreStackScreenProps = NativeStackScreenProps<ExploreStackParamList>;

const { Group, Navigator, Screen } = createNativeStackNavigator<ExploreStackParamList>();

const ExploreStack: FC = () => {
  return (
    <Navigator
      initialRouteName="main-explore-screen"
      screenOptions={{ headerBackTitleVisible: false, headerTitleAlign: "center" }}
    >
      <Group screenOptions={{ headerShadowVisible: false }}>
        <Screen component={ExploreScreen} name="main-explore-screen" options={{ title: "Explore" }} />
      </Group>
    </Navigator>
  );
};

export default ExploreStack;
