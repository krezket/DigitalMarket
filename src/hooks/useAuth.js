import { View, Text } from 'react-native'
import React from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({}) => {
  return (
    <AuthContext.Provider value={null}>
      <Text>AuthProvider</Text>
    </AuthContext.Provider>
  )
}