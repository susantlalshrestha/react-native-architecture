import { Button } from "@core-kits/components";
import { FC, useCallback, useState } from "react";
import { Text, View } from "react-native";
import { AuthStackScreenProps } from "../navigators";
import LoginSignUpView, { ILoginSignUpProps } from "../views/login-signup-view";

type IAuthScreenProps = AuthStackScreenProps;

const AuthScreen: FC<IAuthScreenProps> = ({ navigation, route }) => {
  const [modalView, setModalView] = useState<ILoginSignUpProps["view"]>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const hideModal = useCallback(() => {
    setModalView(undefined);
    setModalVisible(false);
  }, []);
  const showModal = useCallback((view: ILoginSignUpProps["view"]) => {
    setModalView(view);
    setModalVisible(true);
  }, []);

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ flex: 1, fontSize: 30, fontWeight: "bold", textAlignVertical: "bottom" }}>Guff</Text>
        <View style={{ flex: 1.5, justifyContent: "center", padding: 12, width: "100%" }}>
          <Button
            containerStyle={{ borderColor: "black", margin: 12 }}
            title="Sign Up"
            onPress={() => showModal("signup")}
          />
          <Button
            containerStyle={{ borderColor: "black", margin: 12 }}
            title="Login"
            onPress={() => showModal("login")}
          />
        </View>
      </View>
      <LoginSignUpView onDismiss={hideModal} view={modalView} visible={modalVisible} />
    </>
  );
};

export default AuthScreen;
