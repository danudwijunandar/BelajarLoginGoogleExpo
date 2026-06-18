import AsyncStorage from "@react-native-async-storage/async-storage";

import useAuthStore from "@/store/auth.store";

const USER_KEY = "auth_user";

export async function bootstrapAuth() {
  try {
    const user = await AsyncStorage.getItem(USER_KEY);

    if (!user) return;

    useAuthStore.getState().login(JSON.parse(user));
  } catch (error) {
    console.log(error);
  }
}
