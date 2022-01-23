import { createContext, FC, useContext } from "react";
import AuthCoordinatorDelegate from "./auth-coordinator-delegate";

const AuthCoordinatorContext = createContext<AuthCoordinatorDelegate | null>(null);

export const AuthCoordinatorProvider: FC<{ coordinator: AuthCoordinatorDelegate }> = ({ coordinator, children }) => {
  return <AuthCoordinatorContext.Provider value={coordinator}>{children}</AuthCoordinatorContext.Provider>;
};

export const AuthCoordinatorConsumer = AuthCoordinatorContext.Consumer;

export const useAuthCoordinator = () => useContext(AuthCoordinatorContext);
