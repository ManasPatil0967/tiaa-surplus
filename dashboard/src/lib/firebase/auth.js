import { auth,db } from './config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc,setDoc,doc, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";


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
        const res = await signInWithEmailAndPassword(email, password);
        console.log("Pappu Pass");
        return res;
    } catch (e){
        return e;
    }
}

export async function register(Name,email,password,Age,Income,Retirement_Income){
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        if(userCredential && userCredential.user){
           const docRef = await addDoc(collection(db,"users"),{
                Age: Age,                
                Income: Income,
                Name: Name,
                Retirement_Income: Retirement_Income,
            });
            console.log("ID: ",docRef.id)
        }
    } catch (error) {
        console.log(error);
    }
    return true;
}

