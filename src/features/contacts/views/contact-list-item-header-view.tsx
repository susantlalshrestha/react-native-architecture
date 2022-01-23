import { StyleSheet, Text, View } from "react-native";

type ContactListItemHeaderViewProps<T extends any> = {
  text: string;
};

function ContactListItemHeaderView<T extends any = any>({ text }: ContactListItemHeaderViewProps<T>) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 1,
    backgroundColor: "whitesmoke",
    padding: 10,
  },
  text: {
    fontSize: 18,
    textAlignVertical: "center",
  },
});

export default ContactListItemHeaderView;
