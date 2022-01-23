import { useContextFactory } from "@core-kits/utilities";
import { FC } from "react";
import { ChatCoordinatorProvider } from "../coordinators";
import ChatContextFactory from "./chat-context-factory";

const ChatContextProvider: FC = ({ children }) => {
  const contextFactory = useContextFactory<ChatContextFactory>();
  const coordinator = contextFactory.createChatCoordinator();
  return (
    <>
      <ChatCoordinatorProvider coordinator={coordinator}>{children}</ChatCoordinatorProvider>
    </>
  );
};

export default ChatContextProvider;
