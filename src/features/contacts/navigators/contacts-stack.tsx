import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { ContactListScreen } from "../screens";

type ContactsStackParamList = {
  "contact-list-screen": undefined;
};

export type ContactsStackScreenProps = NativeStackScreenProps<ContactsStackParamList>;

const { Group, Navigator, Screen } = createNativeStackNavigator<ContactsStackParamList>();

const ContactsStack: FC = () => {
  return (
    <Navigator screenOptions={{ headerBackTitleVisible: false, headerTitleAlign: "center" }}>
      <Group screenOptions={{ headerShadowVisible: false }}>
        <Screen component={ContactListScreen} name="contact-list-screen" options={{ title: "Contacts" }} />
      </Group>
    </Navigator>
  );
};

export default ContactsStack;
