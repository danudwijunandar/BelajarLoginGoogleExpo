import { create } from "zustand";

import { AuthState, UserModel } from "@/modules/auth/types/auth.types";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  isAuthenticated: false,

  isLoading: false,

  login: async (user: UserModel) => {
    set({
      user,
      isAuthenticated: true,
    });
  },

  logout: async () => {
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  },

  setLoading: (loading: boolean) =>
    set({
      isLoading: loading,
    }),
}));

export default useAuthStore;
