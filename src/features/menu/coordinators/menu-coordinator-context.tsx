import { createContext, FC, useContext } from "react";
import MenuCoordinatorDelegate from "./menu-coordinator-delegate";

const MenuCoordinatorContext = createContext<MenuCoordinatorDelegate | null>(null);

export const MenuCoordinatorProvider: FC<{ coordinator: MenuCoordinatorDelegate }> = ({ coordinator, children }) => {
  return <MenuCoordinatorContext.Provider value={coordinator}>{children}</MenuCoordinatorContext.Provider>;
};

export const MenuCoordinatorConsumer = MenuCoordinatorContext.Consumer;

export const useMenuCoordinator = () => useContext(MenuCoordinatorContext);
