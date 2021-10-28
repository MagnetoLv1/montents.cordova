import { initializeApp } from 'firebase/app';
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
    User,
    UserCredential,
} from 'firebase/auth';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';

import config from '../config.json';

interface AuthContextProps {
    children?: JSX.Element;
}

interface AuthContext {
    signin: () => Promise<UserCredential>;
    currentUser: User | null;
    logout: () => Promise<void>;
    isAuthenticated: boolean;
}

const firebase = initializeApp(config.firebase);
const AuthContext = createContext<AuthContext>({} as AuthContext);
const auth = getAuth(firebase);

export function useAuth(): AuthContext {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: AuthContextProps): JSX.Element {
    const [currentUser, setCurrentUser] = useState<User | null>(() => auth.currentUser);
    const [loading, setLoading] = useState<boolean>(true);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

    const signin = async (): Promise<UserCredential> => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    const logout = async (): Promise<void> => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
            setCurrentUser(user);
            setIsAuthenticated(!!user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value: AuthContext = { currentUser, logout, isAuthenticated, signin };
    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
