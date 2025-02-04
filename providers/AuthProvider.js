"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/firebase/config";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe estar dentro de un AuthContextProvider");
    }
    return context;
};

const AuthContextProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoggedIn(!!user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleLogin = async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const handleLogout = async () => {
        return signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ currentUser, loggedIn, handleLogin, handleLogout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
