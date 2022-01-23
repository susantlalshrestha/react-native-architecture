import { ContextFactoryProvider } from "@core-kits/utilities";
import { FC } from "react";
import AppContextFactory from "./app-context-factory";

const AppContextProvider: FC = ({ children }) => {
  return <ContextFactoryProvider value={new AppContextFactory()}>{children}</ContextFactoryProvider>;
};

export default AppContextProvider;
