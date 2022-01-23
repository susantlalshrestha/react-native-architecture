import { Button } from "@core-kits/components";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { ExploreStackScreenProps } from "../navigators/explore-stack";

type IExploreScreenProps = ExploreStackScreenProps;

const ExploreScreen: FC<IExploreScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, margin: 12 }}>
      <Button
        containerStyle={styles.exploreButtonContainer}
        onPress={() => {}}
        title="Moments"
        titleStyle={styles.exploreButtonTitle}
      />
      <Button
        containerStyle={styles.exploreButtonContainer}
        onPress={() => {}}
        title="Scan"
        titleStyle={styles.exploreButtonTitle}
      />
      <Button
        containerStyle={styles.exploreButtonContainer}
        onPress={() => {}}
        title="Shake"
        titleStyle={styles.exploreButtonTitle}
      />
      <Button
        containerStyle={styles.exploreButtonContainer}
        onPress={() => {}}
        title="People Nearby"
        titleStyle={styles.exploreButtonTitle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  exploreButtonContainer: {
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 16,
    marginVertical: 6,
    padding: 16,
  },
  exploreButtonTitle: {
    textTransform: "capitalize",
  },
});

export default ExploreScreen;
