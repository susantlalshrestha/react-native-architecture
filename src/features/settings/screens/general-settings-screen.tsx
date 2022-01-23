import { MenuButton } from "@core-kits/components";
import { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView, Switch } from "react-native-gesture-handler";
import { SettingsStackScreenProps } from "../navigators/settings-stack";

type IGeneralSettingsScreenProps = SettingsStackScreenProps;

const GeneralSettingsScreen: FC<IGeneralSettingsScreenProps> = ({ navigation }) => {
  const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(false);
  const [easyModeEnabled, setEasyModeEnabled] = useState<boolean>(false);
  return (
    <ScrollView>
      <View style={{ flex: 1, margin: 12 }}>
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => (
            <Switch onValueChange={() => setDarkModeEnabled(!darkModeEnabled)} value={darkModeEnabled} />
          )}
          onPress={() => {}}
          title="Dark Mode"
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => (
            <Switch onValueChange={() => setEasyModeEnabled(!easyModeEnabled)} value={easyModeEnabled} />
          )}
          onPress={() => {}}
          title="Easy Mode"
        />
        <Text style={{ marginHorizontal: 12, marginBottom: 6, fontSize: 12 }}>
          Larger font size, sharper color, bigger and more user friendly buttons
        </Text>
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => (
            <Text numberOfLines={1} style={{ fontSize: 10, padding: 10, textAlign: "right" }}>
              English
            </Text>
          )}
          onPress={() => {}}
          title="Language"
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => (
            <Text numberOfLines={1} style={{ fontSize: 10, padding: 10, textAlign: "right" }}>
              Normal
            </Text>
          )}
          onPress={() => {}}
          title="Text Size"
        />
        <MenuButton containerStyle={styles.menuButtonContainer} onPress={() => {}} title="Background" />
        <MenuButton containerStyle={styles.menuButtonContainer} onPress={() => {}} title="Media" />
        <MenuButton containerStyle={styles.menuButtonContainer} onPress={() => {}} title="Manage Explore / Discover" />
        <MenuButton containerStyle={styles.menuButtonContainer} onPress={() => {}} title="Storage" />
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
});

export default GeneralSettingsScreen;
