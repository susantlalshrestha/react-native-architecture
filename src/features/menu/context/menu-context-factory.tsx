import { MenuCoordinatorDelegate } from "../coordinators";

export default interface MenuContextFactory {
  createMenuCoordinator(): MenuCoordinatorDelegate;
}
