import { auth,db } from './config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc,setDoc,doc, collection } from "firebase/firestore";


export function onAuthStateChanged(callback) {
    return auth.onAuthStateChanged(callback);
}

export async function signOut() {
    try {
            return auth.signOut();
    } catch (error) {
            console.error("Error signing out with Google", error);
    }
}

export async function login(email, password){
    try {
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log("User: ",user.uid);
            console.log("Pappu Pass");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error: ",errorCode,errorMessage);
        });
    } catch (e){
        return e;
    }
}

export async function register(Name,email,password,Age,Income,Retirement_Income){
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        if(userCredential && userCredential.user){
            const docRef = doc(db, "users", userCredential.user.uid);
           await setDoc(docRef, {
                Age: Age,                
                Income: Income,
                Name: Name,
                Retirement_Income: Retirement_Income,
            });
            
        }
    } catch (error) {
        console.log(error);
    }
    return true;
}

