import { MaterialIcons } from "@expo/vector-icons";
import { ChatStack } from "@features/chat";
import { ContactsStack } from "@features/contacts";
import { ExploreStack } from "@features/explore";
import { MenuStack } from "@features/menu";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";

export type HomeTabParamList = {
  "chat-tab": undefined;
  "contact-tab": undefined;
  "explore-tab": undefined;
  "menu-tab": undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<HomeTabParamList>();

const Tab = () => <View></View>;

export default () => {
  return (
    <Navigator
      initialRouteName="chat-tab"
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: styles.tabBarIcon,
        tabBarItemStyle: styles.tabBarItem,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: styles.tabBar,
        title: "",
      }}
    >
      <Screen
        component={ChatStack}
        name="chat-tab"
        options={{
          tabBarIcon: ({ size, color }) => <MaterialIcons name="chat" size={size} color={color} />,
          tabBarLabel: "Chat",
        }}
      />
      <Screen
        component={ContactsStack}
        name="contact-tab"
        options={{
          tabBarIcon: ({ size, color }) => <MaterialIcons name="contacts" size={size} color={color} />,
          tabBarLabel: "Contacts",
        }}
      />
      <Screen
        component={ExploreStack}
        name="explore-tab"
        options={{
          tabBarIcon: ({ size, color }) => <MaterialIcons name="explore" size={size} color={color} />,
          tabBarLabel: "Explore",
        }}
      />
      <Screen
        component={MenuStack}
        name="menu-tab"
        options={{
          tabBarIcon: ({ size, color }) => <MaterialIcons name="menu" size={size} color={color} />,
          tabBarLabel: "Menu",
        }}
      />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
  },
  tabBarIcon: {
    flex: 2,
  },
  tabBarItem: {
    alignItems: "stretch",
  },
  tabBarLabel: {
    flex: 1,
    fontWeight: "bold",
  },
});
