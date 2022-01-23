import { ContactsCoordinatorDelegate } from "../coordinators";

export default interface ContactsContextFactory {
  createChatCoordinator(): ContactsCoordinatorDelegate;
}
