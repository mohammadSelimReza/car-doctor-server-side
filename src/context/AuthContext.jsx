import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import app from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// create context
export const AuthProvider = createContext();

// auth
const auth = getAuth(app);
// main part
const AuthContext = ({ children }) => {
  // user state:
  const [user, setUser] = useState(null);
  // createuser
  const newUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // loginuser
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // signout
  const logOut = () => {
    return signOut(auth);
  };
  // useEffect for authState Changed:
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUSer) => {
      if (currentUSer) {
        console.log("currentUSer", currentUSer);
        setUser(currentUSer);
      } else {
        console.log("no user available right");
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // auth context all value stored::
  const authInfo = { user, newUser, userLogin, logOut };
  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};
// prop-types error resolved::
AuthContext.propTypes = {
  children: PropTypes.node.isRequired,
};
// export main function::
export default AuthContext;
