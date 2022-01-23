import { createContext, FC, useContext } from "react";
import ChatCoordinatorDelegate from "./chat-coordinator-delegate";

const ChatCoordinatorContext = createContext<ChatCoordinatorDelegate | null>(null);

export const ChatCoordinatorProvider: FC<{ coordinator: ChatCoordinatorDelegate }> = ({ coordinator, children }) => {
  return <ChatCoordinatorContext.Provider value={coordinator}>{children}</ChatCoordinatorContext.Provider>;
};

export const ChatCoordinatorConsumer = ChatCoordinatorContext.Consumer;

export const useChatCoordinator = () => useContext(ChatCoordinatorContext);
