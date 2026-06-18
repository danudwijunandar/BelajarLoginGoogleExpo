import AsyncStorage from "@react-native-async-storage/async-storage";

import useAuthStore from "@/store/auth.store";

const USER_KEY = "auth_user";

export async function bootstrapAuth() {
  try {
    const storedUser = await AsyncStorage.getItem(USER_KEY);

    if (!storedUser) return;

    const user = JSON.parse(storedUser);

    await useAuthStore.getState().login(user);
  } catch (error) {
    console.error("Failed to restore auth:", error);
  }
}
