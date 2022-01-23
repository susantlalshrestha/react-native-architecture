import { MenuButton } from "@core-kits/components";
import { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView, Switch } from "react-native-gesture-handler";
import { SettingsStackScreenProps } from "../navigators/settings-stack";

type IPrivacyScreenProps = SettingsStackScreenProps;

const PrivacyScreen: FC<IPrivacyScreenProps> = ({ navigation }) => {
  const [onlineStatusEnabled, setOnlineStatusEnabled] = useState<boolean>(false);
  const [seenStatusEnabled, setSeenStatusEnabled] = useState<boolean>(false);
  const [friendSuggestionsEnabled, setFriendsSuggestionsEnabled] = useState<boolean>(false);
  const [yourPhotoEnabled, setYourPhotoEnabled] = useState<boolean>(false);
  return (
    <ScrollView>
      <View style={{ flex: 1, margin: 12 }}>
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => (
            <Switch onValueChange={() => setOnlineStatusEnabled(!onlineStatusEnabled)} value={onlineStatusEnabled} />
          )}
          onPress={() => {}}
          title="Show `Online` Status"
        />
        <Text style={{ marginHorizontal: 12, marginBottom: 6, fontSize: 12 }}>
          You can change this setting once every 24 hour
        </Text>
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => (
            <Switch onValueChange={() => setSeenStatusEnabled(!seenStatusEnabled)} value={seenStatusEnabled} />
          )}
          onPress={() => {}}
          title="Show `Seen` Status"
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => (
            <Switch
              onValueChange={() => setFriendsSuggestionsEnabled(!friendSuggestionsEnabled)}
              value={friendSuggestionsEnabled}
            />
          )}
          onPress={() => {}}
          title="Allow Friend Suggestions"
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => (
            <Switch onValueChange={() => setYourPhotoEnabled(!yourPhotoEnabled)} value={yourPhotoEnabled} />
          )}
          onPress={() => {}}
          title="Show Your Photo"
        />
        <View style={{ height: 0.5, backgroundColor: "grey", margin: 16 }} />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => (
            <Text numberOfLines={1} style={{ fontSize: 10, padding: 10, textAlign: "right" }}>
              Friends
            </Text>
          )}
          onPress={() => {}}
          title="Control who can add you to `groups`"
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => (
            <Text numberOfLines={1} style={{ fontSize: 10, padding: 10, textAlign: "right" }}>
              40 contacts
            </Text>
          )}
          onPress={() => {}}
          title="Blocklist"
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
});

export default PrivacyScreen;
