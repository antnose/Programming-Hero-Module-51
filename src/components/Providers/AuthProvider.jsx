import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "../../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const name = "potato alo muia";
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    name,
    createUser,
    signInUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

/**
 * 1. create context with null as default
 * 2. create provider
 * 3. set a  default value
 * 4. [attention please !!!]
 * 5. use the authProvider in the main.jsx
 * 6. access the children inside the authProvider in the main.jsx
 * 7. export AuthContext
 *
 */
// 6.53
