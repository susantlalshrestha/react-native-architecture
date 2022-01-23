import { MenuCoordinatorDelegate } from "@features/menu";
import { StackActions } from "@react-navigation/native";
import BaseCoordinator from "./base-coordinator";

export default class MenuCoordinator extends BaseCoordinator implements MenuCoordinatorDelegate {
  toMainSettingsScreen() {
    this.navigation.dispatch(StackActions.push("settings-stack"));
  }
}
