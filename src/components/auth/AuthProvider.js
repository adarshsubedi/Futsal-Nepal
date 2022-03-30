import React, {useState, createContext, useContext, useEffect} from 'react';
import {auth} from "@react-native-firebase/auth";
// import { AppProvider } from 'react-providers';

// import AuthProvider from './auth/index.js';

//import { createContext } from "react/cjs/react.production.min";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return(
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try{
                        await auth().signInWithEmailAndPassword(email, password)
                    } catch(e) {
                        console.log(e);
                    }
                },
                register: async(email, password) => {
                    // console.log(user);
                    try{
                        await auth().createUserWithEmailAndPassword(email, password);
                    } catch(e) {
                        console.log(user);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.log(e);
                    }
                },
            }}>
                {children}
        </AuthContext.Provider>
    )
}

// export default createContext;