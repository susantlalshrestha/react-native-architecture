import { AuthCoordinatorDelegate } from "../coordinators";

export default interface AuthContextFactory {
  createAuthCoordinator(): AuthCoordinatorDelegate;
}
