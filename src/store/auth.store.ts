import AsyncStorage from "@react-native-async-storage/async-storage";

import { create } from "zustand";

import { AuthState, UserModel } from "@/modules/auth/types/auth.types";

const USER_KEY = "auth_user";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  isAuthenticated: false,

  isLoading: false,

  login: async (user: UserModel) => {
    await AsyncStorage.setItem(
      USER_KEY,

      JSON.stringify(user),
    );

    set({
      user,

      isAuthenticated: true,
    });
  },

  logout: async () => {
    await AsyncStorage.removeItem(USER_KEY);

    set({
      user: null,

      isAuthenticated: false,
    });
  },

  setLoading: (loading) => {
    set({
      isLoading: loading,
    });
  },
}));

export default useAuthStore;
