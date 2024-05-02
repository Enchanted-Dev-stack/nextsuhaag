import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBUQxdZ4OTYx5iKYzgzrzZYrUaPjmI-sZc",
    authDomain: "suhaag-matrimony01.firebaseapp.com",
    projectId: "suhaag-matrimony01",
    storageBucket: "suhaag-matrimony01.appspot.com",
    messagingSenderId: "627382869104",
    appId: "1:627382869104:web:b5508f105ef0476861a8b5",
    measurementId: "G-FVS10EMQ42"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = app.firestore();
const auth = app.auth();

export {db, auth}