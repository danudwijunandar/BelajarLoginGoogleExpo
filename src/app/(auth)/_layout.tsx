import { Redirect, Stack } from "expo-router";

import { useAuthGuard } from "@/modules/auth/hooks/useAuthGuard";

export default function AuthLayout() {
  const { isAuthenticated } = useAuthGuard();

  if (isAuthenticated) {
    return <Redirect href="/(tabs)/home" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
