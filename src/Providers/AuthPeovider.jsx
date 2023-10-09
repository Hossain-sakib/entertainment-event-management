import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // signup
    const signUpUser = (email, password, name, image) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User is signed up successfully
            const user = userCredential.user;

            // Update the user's profile with name and photo URL
            return updateProfile(user, {
                displayName: name,
                photoURL: image,
            })
                .then(() => {
                    // Profile updated successfully
                    setUser(user);
                    setLoading(false);
                })
                .catch((error) => {
                    // Handle error while updating profile
                    console.error("Error updating user profile:", error);
                    setLoading(false);
                });
        })
    .catch((error) => {
        // Handle error while signing up
        console.error("Error signing up user:", error);
        setLoading(false);
    });
    }


    
// signin
const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}
// signin with google
const googleProvider = new GoogleAuthProvider();
const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);

}
// signout
const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
}
// observer
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('user:', currentUser);
        setUser(currentUser);
        setLoading(false);
    });
    return () => {
        unsubscribe();
    }
}, [])






const authInfo = {
    signUpUser,
    signInUser,
    signOutUser,
    googleSignIn,
    user,
    loading

};


return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
);
};

export default AuthProvider;