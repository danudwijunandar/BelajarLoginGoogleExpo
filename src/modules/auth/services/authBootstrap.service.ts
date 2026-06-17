import { STORAGE_KEYS } from "@/constants/storage.contants";
import { User } from "@/modules/auth/types/auth.types";
import { storage } from "@/utils/storage";

export async function getStoredUser() {
  return storage.getItem<User>(STORAGE_KEYS.USER);
}
