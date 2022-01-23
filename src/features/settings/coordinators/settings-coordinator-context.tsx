import { createContext, FC, useContext } from "react";
import SettingsCoordinatorDelegate from "./settings-coordinator-delegate";

const SettingsCoordinatorContext = createContext<SettingsCoordinatorDelegate | null>(null);

export const SettingsCoordinatorProvider: FC<{ coordinator: SettingsCoordinatorDelegate }> = ({
  coordinator,
  children,
}) => {
  return <SettingsCoordinatorContext.Provider value={coordinator}>{children}</SettingsCoordinatorContext.Provider>;
};

export const SettingsCoordinatorConsumer = SettingsCoordinatorContext.Consumer;

export const useSettingsCoordinator = () => useContext(SettingsCoordinatorContext);
