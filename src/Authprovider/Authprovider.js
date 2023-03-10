import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile}  from "firebase/auth";
import { app } from '../firebase/Firebase.config';
import toast from 'react-hot-toast';
export const AuthContext = createContext();

const auth = getAuth(app)
const Authprovider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const provider = new GoogleAuthProvider();
  const googleSign=()=>{
    setLoading(true)
      return signInWithPopup(auth,provider)  
  }

//   create user 
const SignUpWithEmailPassword = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const UpdateUser=(userInfo)=>{
    return updateProfile(auth.currentUser, userInfo);
}

// login user
const loginUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// logOut
const logOut = ()=>{
    setLoading(true)
    signOut(auth).then(()=>{
        toast.success('Log Out Successfully')
    })
}

// on state change
useEffect( () =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);
    });

    return () => unsubscribe();
}, [])

     const authInfo = {
        user,setUser,loading,setLoading,googleSign,logOut,UpdateUser
        ,SignUpWithEmailPassword,loginUser
     };

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default Authprovider;