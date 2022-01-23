import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppContextProvider } from "./context";
import AppNavigation from "./navigation";

export default function Application() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider>
        <AppContextProvider>
          <AppNavigation />
        </AppContextProvider>
      </SafeAreaProvider>
    </>
  );
}
