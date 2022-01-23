import { SettingsCoordinatorDelegate } from "@features/settings";
import { StackActions } from "@react-navigation/native";
import BaseCoordinator from "./base-coordinator";

export default class SettingsCoordinator extends BaseCoordinator implements SettingsCoordinatorDelegate {
  toAuthScreen() {
    this.navigation.dispatch(StackActions.popToTop());
    this.navigation.dispatch(StackActions.replace("auth-stack"));
  }
}
