import { createContext, FC, useContext } from "react";
import ContactsCoordinatorDelegate from "./contacts-coordinator-delegate";

const ContactsCoordinatorContext = createContext<ContactsCoordinatorDelegate | null>(null);

export const ContactsCoordinatorProvider: FC<{ coordinator: ContactsCoordinatorDelegate }> = ({
  coordinator,
  children,
}) => {
  return <ContactsCoordinatorContext.Provider value={coordinator}>{children}</ContactsCoordinatorContext.Provider>;
};

export const ContactsCoordinatorConsumer = ContactsCoordinatorContext.Consumer;

export const useContactsCoordinator = () => useContext(ContactsCoordinatorContext);
