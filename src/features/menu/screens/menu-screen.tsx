import { MenuButton } from "@core-kits/components";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMenuCoordinator } from "../coordinators";
import { MenuStackScreenProps } from "../navigators";
import { MenuProfileView } from "../views";

type IMenuScreenProps = MenuStackScreenProps;

const MenuScreen: FC<IMenuScreenProps> = () => {
  const coordinator = useMenuCoordinator();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MenuProfileView containerStyle={{ margin: 12 }} />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          icon={() => <MaterialIcons name="favorite" size={20} />}
          onPress={() => {}}
          title="Favorites"
          titleStyle={styles.menuButtonTitle}
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          icon={() => <Ionicons name="happy-outline" size={20} />}
          onPress={() => {}}
          title="Moments"
          titleStyle={styles.menuButtonTitle}
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          icon={() => <MaterialCommunityIcons name="sticker-emoji" size={20} />}
          onPress={() => {}}
          title="Sticker Gallery"
          titleStyle={styles.menuButtonTitle}
        />
        <MenuButton
          containerStyle={styles.menuButtonContainer}
          icon={() => <Ionicons name="settings" size={20} />}
          onPress={() => {
            coordinator?.toMainSettingsScreen();
          }}
          title="Settings"
          titleStyle={styles.menuButtonTitle}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuButtonContainer: {
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 16,
    marginHorizontal: 12,
    marginVertical: 6,
  },
  menuButtonTitle: {
    textTransform: "capitalize",
  },
});

export default MenuScreen;
