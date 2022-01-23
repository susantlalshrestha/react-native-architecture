import { useContextFactory } from "@core-kits/utilities";
import { FC } from "react";
import { SettingsCoordinatorProvider } from "../coordinators";
import SettingsContextFactory from "./settings-context-factory";

const SettingsContextProvider: FC = ({ children }) => {
  const contextFactory = useContextFactory<SettingsContextFactory>();
  const coordinator = contextFactory.createSettingsCoordinator();
  return (
    <>
      <SettingsCoordinatorProvider coordinator={coordinator}>{children}</SettingsCoordinatorProvider>
    </>
  );
};

export default SettingsContextProvider;
