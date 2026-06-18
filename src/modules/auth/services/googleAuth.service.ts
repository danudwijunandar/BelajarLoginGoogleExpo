import { GoogleSignin } from "@react-native-google-signin/google-signin";
import {
    GoogleAuthProvider,
    signInWithCredential,
    signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { auth, db } from "@/config/firebase";
import useAuthStore from "@/store/auth.store";

GoogleSignin.configure({
  webClientId:
    "1050137852694-mm70t4ihno0ohde7t7njv6fe4b3htjsq.apps.googleusercontent.com",

  offlineAccess: true,
});

class GoogleAuthService {
  async signIn() {
    try {
      await GoogleSignin.hasPlayServices();

      const response = await GoogleSignin.signIn();

      const idToken =
        (response as any).idToken ?? (response as any).data?.idToken;

      if (!idToken) {
        throw new Error("No Google ID Token");
      }

      const credential = GoogleAuthProvider.credential(idToken);

      const userCredential = await signInWithCredential(auth, credential);

      const user = userCredential.user;

      const userModel = {
        uid: user.uid,
        email: user.email ?? "",
        displayName: user.displayName ?? "",
        photoURL: user.photoURL ?? "",
      };

      await setDoc(doc(db, "users", user.uid), userModel, {
        merge: true,
      });

      await useAuthStore.getState().login(userModel);

      return userModel;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async signOut() {
    await GoogleSignin.signOut();

    await signOut(auth);

    await useAuthStore.getState().logout();
  }
}

export default new GoogleAuthService();
