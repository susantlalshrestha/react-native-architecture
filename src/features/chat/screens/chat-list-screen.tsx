import { TextInput } from "@core-kits/components";
import { MaterialIcons } from "@expo/vector-icons";
import { FC, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ChatStackScreenProps } from "../navigators";
import { ChatListItemView } from "../views";

type IChatListScreenProps = ChatStackScreenProps;

const ChatListScreen: FC<IChatListScreenProps> = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => <MaterialIcons name="add" size={25} color={tintColor} />,
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.searchAnimatedView}>
        <TextInput
          containerStyle={styles.searchContainer}
          iconLeft={() => <MaterialIcons size={20} name="search" />}
          placeholder="Search"
        />
      </View>
      <FlatList
        data={[
          { id: "1" },
          { id: "2" },
          { id: "3" },
          { id: "4" },
          { id: "5" },
          { id: "6" },
          { id: "7" },
          { id: "8" },
          { id: "9" },
          { id: "10" },
          { id: "11" },
          { id: "12" },
          { id: "13" },
          { id: "14" },
          { id: "15" },
        ]}
        renderItem={({ item }) => <ChatListItemView chatItem={item} />}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchAnimatedView: {
    backgroundColor: "transparent",
    margin: 12,
  },
  searchContainer: {
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 24,
  },
});

export default ChatListScreen;
