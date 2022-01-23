import { useContextFactory } from "@core-kits/utilities/context-factory-context";
import { FC } from "react";
import { AuthCoordinatorProvider } from "../coordinators";
import AuthContextFactory from "./auth-context-factory";

const AuthContextProvider: FC = ({ children }) => {
  const contextFactory = useContextFactory<AuthContextFactory>();
  const coordinator = contextFactory.createAuthCoordinator();
  return <AuthCoordinatorProvider coordinator={coordinator}>{children}</AuthCoordinatorProvider>;
};

export default AuthContextProvider;
