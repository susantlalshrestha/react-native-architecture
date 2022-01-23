import { ExploreCoordinatorDelegate } from "../coordinators";

export default interface ExploreContextFactory {
  createExploreCoordinator(): ExploreCoordinatorDelegate;
}
