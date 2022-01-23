import { AuthContextFactory, AuthCoordinatorDelegate } from "@features/auth";
import { MenuContextFactory, MenuCoordinatorDelegate } from "@features/menu";
import { SettingsContextFactory, SettingsCoordinatorDelegate } from "@features/settings";
import { AuthCoordinator, MenuCoordinator, SettingsCoordinator } from "../coordinators";

export default class AppContextFactory implements AuthContextFactory, MenuContextFactory, SettingsContextFactory {
  createAuthCoordinator(): AuthCoordinatorDelegate {
    return new AuthCoordinator();
  }
  createMenuCoordinator(): MenuCoordinatorDelegate {
    return new MenuCoordinator();
  }
  createSettingsCoordinator(): SettingsCoordinatorDelegate {
    return new SettingsCoordinator();
  }
}
