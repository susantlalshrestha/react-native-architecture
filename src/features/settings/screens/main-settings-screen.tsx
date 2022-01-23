import { MenuButton } from "@core-kits/components";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSettingsCoordinator } from "../coordinators";
import { SettingsStackScreenProps } from "../navigators/settings-stack";

type IMainSettingsScreenProps = SettingsStackScreenProps;

const MainSettingsScreen: FC<IMainSettingsScreenProps> = ({ navigation }) => {
  const coordinator = useSettingsCoordinator();
  return (
    <ScrollView>
      <View style={{ flex: 1, margin: 12 }}>
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          onPress={() => {
            navigation.navigate("account-security-screen");
          }}
          title="Account Security"
          titleStyle={styles.menuButtonTitle}
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          onPress={() => {
            navigation.navigate("notification-settings-screen");
          }}
          title="Notification Settings"
          titleStyle={styles.menuButtonTitle}
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          onPress={() => {
            navigation.navigate("privacy-screen");
          }}
          title="Privacy"
          titleStyle={styles.menuButtonTitle}
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          onPress={() => {
            navigation.navigate("general-settings-screen");
          }}
          title="General Settings"
          titleStyle={styles.menuButtonTitle}
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          onPress={() => {}}
          title="Help & Feedback"
          titleStyle={styles.menuButtonTitle}
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => <Text style={{ fontSize: 10, padding: 10 }}>Version 1.0</Text>}
          onPress={() => {}}
          title="About"
          titleStyle={styles.menuButtonTitle}
        />
        <View style={{ height: 0.5, backgroundColor: "grey", margin: 16 }} />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          onPress={() => {}}
          title="Switch Account"
          titleStyle={styles.menuButtonTitle}
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          onPress={() => {
            coordinator?.toAuthScreen();
          }}
          title="Log Out"
          titleStyle={styles.menuButtonTitle}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menuButtonContainer: {
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 16,
    marginVertical: 6,
  },
  menuButtonTitle: {
    textTransform: "capitalize",
  },
});

export default MainSettingsScreen;
