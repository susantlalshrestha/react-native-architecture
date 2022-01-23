import { ChatCoordinatorDelegate } from "../coordinators";

export default interface ChatContextFactory {
  createChatCoordinator(): ChatCoordinatorDelegate;
}
