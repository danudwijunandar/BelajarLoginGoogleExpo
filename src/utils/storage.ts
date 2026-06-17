import AsyncStorage from "@react-native-async-storage/async-storage";

export const storage = {
  async setItem<T>(key: string, value: T) {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },

  async getItem<T>(key: string) {
    const value = await AsyncStorage.getItem(key);

    if (!value) {
      return null;
    }

    return JSON.parse(value) as T;
  },

  async removeItem(key: string) {
    await AsyncStorage.removeItem(key);
  },
};
