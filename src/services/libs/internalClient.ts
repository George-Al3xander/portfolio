import { env } from "@/configs/env";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: env.API_KEY,
    authDomain: env.AUTH_DOMAIN,
    projectId: env.PROJECT_ID,
    storageBucket: env.STORAGE_BUCKET,
    messagingSenderId: env.SENDER_ID,
    appId: env.APP_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firestoreClient = getFirestore(firebaseApp);
