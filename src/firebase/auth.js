import { auth } from './firebase';
import createHistory from "history/createBrowserHistory";
// Sign In
export const logInFirebase = (email, password) =>{
  auth.signInWithEmailAndPassword(email, password)
  .then((login)=>{
      console.log(login)
      sessionStorage.setItem("user", login.user);
      const history = createHistory();  
      history.push("/home/")
    })
    .catch((error)=>{
      alert('Usuario ou senha inválidos - '+error.message)  
    })  
  

}
// Sign out
export const logOutFirebase = () =>
  auth.signOut();
