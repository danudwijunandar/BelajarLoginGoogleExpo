import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import MiniPlayer from "@/modules/player/components/MiniPlayer";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />

      <MiniPlayer />
    </>
  );
}
