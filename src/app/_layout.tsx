import MiniPlayer from "@/modules/player/components/MiniPlayer";
import YoutubePlayerController from "@/modules/player/components/YoutubePlayerController";
import { Stack, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const pathname = usePathname();
  const hideMiniPlayer = pathname === "/video";

  return (
    <>
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />

      <YoutubePlayerController />

      {!hideMiniPlayer && <MiniPlayer />}
    </>
  );
}
