import { MenuButton } from "@core-kits/components";
import { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView, Switch } from "react-native-gesture-handler";
import { SettingsStackScreenProps } from "../navigators/settings-stack";

type INotificationSettingsScreenProps = SettingsStackScreenProps;

const NotificationSettingsScreen: FC<INotificationSettingsScreenProps> = ({ navigation }) => {
  const [messageEnabled, setMessageEnabled] = useState<boolean>(false);
  const [callsEnabled, setCallsEnabled] = useState<boolean>(false);
  const [voidEnabled, setVoipEnabled] = useState<boolean>(false);
  const [previewTextEnabled, setPreviewTextEnabled] = useState<boolean>(false);
  const [alertSoundEnabled, setAlertSoundEnabled] = useState<boolean>(false);
  const [alertCallsEnabled, setAlertCallEnabled] = useState<boolean>(false);
  const [vibrateEnabled, setVibrateEnabled] = useState<boolean>(false);
  return (
    <ScrollView>
      <View style={{ alignItems: "center", flex: 1, margin: 12 }}>
        <Text style={{ marginHorizontal: 12, marginBottom: 6, fontSize: 12 }}>Push Notifications</Text>
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => <Switch onValueChange={() => setMessageEnabled(!messageEnabled)} value={messageEnabled} />}
          onPress={() => {}}
          title="Messages"
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => <Switch onValueChange={() => setCallsEnabled(!callsEnabled)} value={callsEnabled} />}
          onPress={() => {}}
          title="Voice & Video Calls"
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => <Switch onValueChange={() => setVoipEnabled(!voidEnabled)} value={voidEnabled} />}
          onPress={() => {}}
          title="Receive VoIP on System Phone"
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => (
            <Switch onValueChange={() => setPreviewTextEnabled(!previewTextEnabled)} value={previewTextEnabled} />
          )}
          onPress={() => {}}
          title="Show Preview Text"
        />
        <Text style={{ marginHorizontal: 12, paddingVertical: 6, fontSize: 12 }}>Alert, Sound & Ringtones</Text>
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => (
            <Switch onValueChange={() => setAlertSoundEnabled(!alertSoundEnabled)} value={alertSoundEnabled} />
          )}
          onPress={() => {}}
          title="Alert Sound"
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => (
            <Switch onValueChange={() => setAlertCallEnabled(!alertCallsEnabled)} value={alertCallsEnabled} />
          )}
          onPress={() => {}}
          title="Alert Incoming Voice/Calls"
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => <Switch onValueChange={() => setVibrateEnabled(!vibrateEnabled)} value={vibrateEnabled} />}
          onPress={() => {}}
          title="Vibrate"
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          itemRight={() => (
            <Text numberOfLines={1} style={{ fontSize: 10, padding: 10, textAlign: "right", width: 100 }}>
              Default
            </Text>
          )}
          onPress={() => {}}
          title="Incomming Calls Ringtone"
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

export default NotificationSettingsScreen;
