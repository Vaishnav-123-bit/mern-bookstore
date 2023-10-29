import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext=createContext();
const auth=getAuth(app)
const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const[loading,setloading]=useState(true);

    const createUser=(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginWithGoogle=()=>{
        setloading(true);
        return signInWithPopup(auth,googleprovider)
    }
    const login=()=>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,pass)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            setloading(false)
        });
        return ()=>{
            return unsubscribe()
        }
    },[])
    const authInfo={
        user,
        createUser,
        loginWithGoogle,
        loading,
        login,
        logOut
    }

    // const signUpWithGmail=()=>{
    //     return signUpWithGmail
    // }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider