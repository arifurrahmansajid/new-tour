import { createContext, useEffect, useState, } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/frebas.config";

const auth = getAuth(app);


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    }

    const githubLogin = () => {
        setLoading(true);
       return signInWithPopup(auth, githubProvider)

    }

    const logMeOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }else{
                setUser(null)
            }
            setLoading(false);
          });
          return () =>{
            return unSubscribe();
          }

    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        logInUser,
        googleLogIn,
        githubLogin,
        logMeOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;