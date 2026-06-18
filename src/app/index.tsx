import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

import { getStoredUser } from "@/modules/auth/services/authBootstrap.service";
import { useAuthStore } from "@/store/auth.store";

export default function Index() {
  const [loading, setLoading] = useState(true);

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    async function bootstrap() {
      const user = await getStoredUser();

      if (user) {
        useAuthStore.getState().setUser(user);
      }

      setLoading(false);
    }

    bootstrap();
  }, []);

  if (loading) {
    return null;
  }

  if (isAuthenticated) {
    return <Redirect href="/(tabs)/home" />;
  }

  return <Redirect href="/login" />;
}
