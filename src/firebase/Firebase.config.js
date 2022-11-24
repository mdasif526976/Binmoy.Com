// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId:process.env.REACT_APP_appId,
//   apiKey: "AIzaSyCYZaox-oGkFcnauGW16QYRwY4n9YxJVo8",
//   authDomain: "binmoy-ecommerce.firebaseapp.com",
//   projectId: "binmoy-ecommerce",
//   storageBucket: "binmoy-ecommerce.appspot.com",
//   messagingSenderId: "912150506590",
//   appId: "1:912150506590:web:32e13ecc83ec25825958cf",
};
console.log(firebaseConfig);
// Initialize Firebase
export const app = initializeApp(firebaseConfig);