import { useContextFactory } from "@core-kits/utilities";
import { FC } from "react";
import { ContactsCoordinatorProvider } from "../coordinators";
import ContactsContextFactory from "./contacts-context-factory";

const ContactsContextProvider: FC = ({ children }) => {
  const contextFactory = useContextFactory<ContactsContextFactory>();
  const coordinator = contextFactory.createChatCoordinator();
  return (
    <>
      <ContactsCoordinatorProvider coordinator={coordinator}>{children}</ContactsCoordinatorProvider>
    </>
  );
};

export default ContactsContextProvider;
