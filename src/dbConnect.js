import { initializeApp,cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import { credentials } from "../credentials.js";

//initalize the firebase app by bringing the credential as a part of an object
initializeApp({
    credntial:cert(credentials)
});


export const db= getFirestore();