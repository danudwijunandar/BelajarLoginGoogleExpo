import { doc, setDoc } from "firebase/firestore";

import { db } from "@/config/firebase";

export async function saveUser(user: any) {
  await setDoc(
    doc(
      db,

      "users",

      user.uid,
    ),

    {
      uid: user.uid,

      name: user.displayName,

      email: user.email,

      photo: user.photoURL,

      lastLogin: new Date(),
    },

    {
      merge: true,
    },
  );
}
