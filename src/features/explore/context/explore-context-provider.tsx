import { useContextFactory } from "@core-kits/utilities";
import { FC } from "react";
import { ExploreCoordinatorProvider } from "../coordinators";
import ExploreContextFactory from "./explore-context-factory";

const ExploreContextProvider: FC = ({ children }) => {
  const contextFactory = useContextFactory<ExploreContextFactory>();
  const coordinator = contextFactory.createExploreCoordinator();
  return (
    <>
      <ExploreCoordinatorProvider coordinator={coordinator}>{children}</ExploreCoordinatorProvider>
    </>
  );
};

export default ExploreContextProvider;
