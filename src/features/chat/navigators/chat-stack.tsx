import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { ChatListScreen } from "../screens";

type ChatStackParamList = {
  "chat-list-screen": undefined;
};

export type ChatStackScreenProps = NativeStackScreenProps<ChatStackParamList>;

const { Group, Navigator, Screen } = createNativeStackNavigator<ChatStackParamList>();

const ChatStack: FC = () => {
  return (
    <Navigator
      initialRouteName="chat-list-screen"
      screenOptions={{ headerBackTitleVisible: false, headerTitleAlign: "center" }}
    >
      <Group screenOptions={{ headerShadowVisible: false }}>
        <Screen component={ChatListScreen} name="chat-list-screen" options={{ title: "Guff" }} />
      </Group>
    </Navigator>
  );
};

export default ChatStack;
