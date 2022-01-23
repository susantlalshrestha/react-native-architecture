import { createContext, useContext } from "react";

const ContextFactoryContext = createContext<object>({});

export const ContextFactoryProvider = ContextFactoryContext.Provider;

export const ContextFactoryConsumer = ContextFactoryContext.Consumer;

export function useContextFactory<T extends object>(fallback?: T): T {
  const factory = useContext(ContextFactoryContext);
  if (fallback) return { ...fallback, factory };
  return factory as T;
}
