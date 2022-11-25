import React, { createContext, useState } from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup}  from "firebase/auth";
import { app } from '../firebase/Firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app)
const Authprovider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const provider = new GoogleAuthProvider();
  const googleSign=()=>{
      return signInWithPopup(auth,provider)
      
  }

     const authInfo = {
        user,setUser,loading,setLoading,googleSign
     };

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default Authprovider;