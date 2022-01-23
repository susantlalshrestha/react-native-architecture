import { MenuButton } from "@core-kits/components";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SettingsStackScreenProps } from "../navigators/settings-stack";

type IAccountSecurityScreenProps = SettingsStackScreenProps;

const AccountSecurityScreen: FC<IAccountSecurityScreenProps> = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, margin: 12 }}>
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => (
            <Text numberOfLines={1} style={{ fontSize: 10, padding: 10, textAlign: "right" }}>
              Acc-123456789
            </Text>
          )}
          onPress={() => {}}
          title="Account ID"
          titleStyle={styles.menuButtonTitle}
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => (
            <Text numberOfLines={1} style={{ fontSize: 10, padding: 10, textAlign: "right" }}>
              +977987654321
            </Text>
          )}
          onPress={() => {}}
          title="Phone"
          titleStyle={styles.menuButtonTitle}
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          onPress={() => {}}
          title="Password"
          titleStyle={styles.menuButtonTitle}
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          onPress={() => {}}
          title="Voice Print"
          titleStyle={styles.menuButtonTitle}
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          onPress={() => {}}
          title="Emergency Contacts"
          titleStyle={styles.menuButtonTitle}
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          onPress={() => {}}
          title="Backup"
          titleStyle={styles.menuButtonTitle}
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          onPress={() => {}}
          title="Guff Security Center"
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

export default AccountSecurityScreen;
