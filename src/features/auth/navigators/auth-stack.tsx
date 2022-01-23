import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { AuthContextProvider } from "../context";
import { AuthScreen } from "../screens";

type AuthStackParamList = {
  "auth-screen": undefined;
};

export type AuthStackScreenProps = NativeStackScreenProps<AuthStackParamList>;

const { Group, Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

const AuthStack: FC = () => {
  return (
    <AuthContextProvider>
      <Navigator screenOptions={{ headerBackTitleVisible: false, headerTitleAlign: "center" }}>
        <Group screenOptions={{ headerShown: false }}>
          <Screen component={AuthScreen} name="auth-screen" />
        </Group>
      </Navigator>
    </AuthContextProvider>
  );
};

export default AuthStack;
