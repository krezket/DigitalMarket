import { View, Text } from 'react-native'
import * as Google from 'expo-google-app-auth';
import React, { createContext, useContext } from 'react';

const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {
    const signInWithGoogle = async () => {
        await Google.logInAsync({
            android
        })
    }    
    return (
    <AuthContext.Provider value={{ user: null}}>
      {children}
    </AuthContext.Provider>
  )
};

export default function useAuth() {
    return useContext(AuthContext);
};