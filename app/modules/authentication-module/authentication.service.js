import { learnGeekAuth } from '../../../assets/js/init-firebase.js';

export default function AuthenticationService() {
    return {
        signUp: (email, password) => {
            return learnGeekAuth.createUserWithEmailAndPassword(email, password);
        },

        signIn: (email, password) => {
            return learnGeekAuth.signInWithEmailAndPassword(email, password);
        },

        signOut: () => {
            return learnGeekAuth.signOut();
        },

        isAuthenticated: () => {
            console.log(learnGeekAuth.currentUser);
            return learnGeekAuth.currentUser ? true : false;
        },
    };
}
