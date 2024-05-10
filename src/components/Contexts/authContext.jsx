"use client";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { useRouter } from "next/navigation";

export const AuthContext = React.createContext();

export function useAuth() {
    return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    const setCredentials = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
    };
    const delCredentials = (user) => {
        localStorage.removeItem("user");
    };

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem("user"));

        if (user) {
            setCurrentUser(user);
            setIsUserLoggedIn(true);
        }else{
            setCurrentUser(null);
            setIsUserLoggedIn(false);
        }
        setLoading(false);

        // const unsubscribe = onAuthStateChanged(auth, initializeUser);
        // return unsubscribe;
    }, []);

    // async function initializeUser(user) {
    //     if (user) {
    //         setCurrentUser(...user);
    //         setIsUserLoggedIn(true);
    //     } else {
    //         setCurrentUser(null);
    //         setIsUserLoggedIn(false);
    //     }
    //     // setLoading(false);
    // }

    const googleSignIn = async() => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider).catch((err) => console.log(err));
        if (result) {
            const user = result.user;
            setCurrentUser(user);
            setIsUserLoggedIn(true);
            setCredentials(user);
            router.push("/");
        }
      }

    const logout = async() => {
        auth.signOut();
        setIsUserLoggedIn(false);
        setCurrentUser(null);
        delCredentials();
    }

    let value = {
        currentUser,
        setCurrentUser,
        isUserLoggedIn,
        googleSignIn,
        loading,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
