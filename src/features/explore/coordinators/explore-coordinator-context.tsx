import { createContext, FC, useContext } from "react";
import ExploreCoordinatorDelegate from "./explore-coordinator-delegate";

const ExploreCoordinatorContext = createContext<ExploreCoordinatorDelegate | null>(null);

export const ExploreCoordinatorProvider: FC<{ coordinator: ExploreCoordinatorDelegate }> = ({
  coordinator,
  children,
}) => {
  return <ExploreCoordinatorContext.Provider value={coordinator}>{children}</ExploreCoordinatorContext.Provider>;
};

export const ExploreCoordinatorConsumer = ExploreCoordinatorContext.Consumer;

export const useExploreCoordinator = () => useContext(ExploreCoordinatorContext);
