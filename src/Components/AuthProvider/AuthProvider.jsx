/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firbase.config";

 export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const googleprovider = new GoogleAuthProvider;

    const [loading,setLoading] = useState(true)
    const [user,setUser]=useState(null)
    
// create user with email and password 

const createuser =(email,password)=>{
    setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    }


// update profile

const update =(name,photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,{
        displayName:name,photoURL:photo
    })
}


// login with email and password

const login =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}



// login with google

const googlesignin =()=>{

    return signInWithPopup(auth,googleprovider)
}
// logout

const logout=()=>{
  return  signOut(auth)
}
// state observer
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
        setUser(user)
        setLoading(false)

    })

    return ()=> {
        unsubscribe()}
},[])



    // authinfo
const authinfo ={
    createuser,
    update,
    login,
    user,
    loading,
    logout,
    googlesignin
    
}


    
    return (
        <AuthContext.Provider value={authinfo}>
 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;