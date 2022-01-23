import { TextInput } from "@core-kits/components";
import { MaterialIcons } from "@expo/vector-icons";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ContactsStackScreenProps } from "../navigators";
import { ContactListItemHeaderView, ContactListItemView } from "../views";

type IContactListScreenProps = ContactsStackScreenProps;

const ContactListScreen: FC<IContactListScreenProps> = ({ navigation }) => {
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
          { id: "1", type: "header", text: "A" },
          { id: "2" },
          { id: "3" },
          { id: "4" },
          { id: "5" },
          { id: "6" },
          { id: "7", type: "header", text: "B" },
          { id: "8" },
          { id: "9" },
          { id: "10" },
          { id: "11", type: "header", text: "C" },
          { id: "12" },
          { id: "13" },
          { id: "14" },
          { id: "15" },
          { id: "16", type: "header", text: "D" },
          { id: "17" },
          { id: "18" },
          { id: "19" },
        ]}
        renderItem={({ item }) => {
          if (item.type === "header") return <ContactListItemHeaderView text={item.text} />;
          return <ContactListItemView chatItem={item} />;
        }}
        stickyHeaderIndices={[0, 6, 10]}
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

export default ContactListScreen;
