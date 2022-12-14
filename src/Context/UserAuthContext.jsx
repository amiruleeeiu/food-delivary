import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from "../../src/firebaseConfig";
const userAuthContext=createContext();

export function UserAuthContextProvider({children}){

    const[user,setUser]=useState("");
    


    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn=()=>{
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider)
    }

    const logOut=()=>{
      signOut(auth).then(() => {

      }).catch((error) => {
        // An error happened.
      });
      
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
          console.log("Auth", currentuser);
          setUser(currentuser);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);


    return (
        <userAuthContext.Provider value={{user,signUp,logIn,logOut,googleSignIn}}>
        {children}
        </userAuthContext.Provider>
       )
}

export function useUserAuth(){
    return useContext(userAuthContext);
}