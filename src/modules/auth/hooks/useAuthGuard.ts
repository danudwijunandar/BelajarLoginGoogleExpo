import { useAuthStore } from "@/store/auth.store";

export function useAuthGuard() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return {
    isAuthenticated,
  };
}
