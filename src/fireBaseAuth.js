import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

async function signUp(email, password) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user)
    const userName = user.user.uid;
    return userName;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw error;
  }
}
async function signIn(email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user.user.uid)
    const userName = user.user.uid;
    return userName;
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export { signIn, signUp };
