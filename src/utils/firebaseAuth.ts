import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/configs/firebaseConfig";

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User signed in:", result.user);
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};
