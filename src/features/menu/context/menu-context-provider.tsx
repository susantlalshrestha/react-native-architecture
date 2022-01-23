import { useContextFactory } from "@core-kits/utilities";
import { FC } from "react";
import { MenuCoordinatorProvider } from "../coordinators";
import MenuContextFactory from "./menu-context-factory";

const MenuContextProvider: FC = ({ children }) => {
  const contextFactory = useContextFactory<MenuContextFactory>();
  const coordinator = contextFactory.createMenuCoordinator();
  return (
    <>
      <MenuCoordinatorProvider coordinator={coordinator}>{children}</MenuCoordinatorProvider>
    </>
  );
};

export default MenuContextProvider;
