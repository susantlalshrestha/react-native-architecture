import { AuthCoordinatorDelegate } from "@features/auth";
import { StackActions } from "@react-navigation/native";
import BaseCoordinator from "./base-coordinator";

export default class AuthCoordinator extends BaseCoordinator implements AuthCoordinatorDelegate {
  toHomeScreen() {
    this.navigation.dispatch(StackActions.replace("home-stack"));
  }
}
