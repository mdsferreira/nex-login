import { auth } from './firebase';

// Sign In
export const logInFirebase = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const logOutFirebase = () =>
  auth.signOut();
