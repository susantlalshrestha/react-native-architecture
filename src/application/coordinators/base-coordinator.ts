import { getRootNavigation } from "@application/navigation";

export default class BaseCoordinator {
  protected readonly navigation = getRootNavigation();
}
