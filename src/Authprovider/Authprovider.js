import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut}  from "firebase/auth";
import { app } from '../firebase/Firebase.config';
import toast from 'react-hot-toast';
export const AuthContext = createContext();

const auth = getAuth(app)
const Authprovider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const provider = new GoogleAuthProvider();
  const googleSign=()=>{
      return signInWithPopup(auth,provider)  
  }

//   create user 
const SignUpWithEmailPassword = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

// login user
const loginUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

// logOut
const logOut = ()=>{
    signOut(auth).then(()=>{
        toast.success('Log Out Successfully')
    })
}

     const authInfo = {
        user,setUser,loading,setLoading,googleSign,logOut
        ,SignUpWithEmailPassword,loginUser
     };

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default Authprovider;