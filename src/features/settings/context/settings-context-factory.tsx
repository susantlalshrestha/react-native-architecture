import { SettingsCoordinatorDelegate } from "../coordinators";

export default interface SettingsContextFactory {
  createSettingsCoordinator(): SettingsCoordinatorDelegate;
}
