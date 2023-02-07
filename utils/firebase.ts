import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGEKdWID_BaqCebZJDFfdJ9Q1ul5QV404",
  authDomain: "blog-app-5bd11.firebaseapp.com",
  projectId: "blog-app-5bd11",
  storageBucket: "blog-app-5bd11.appspot.com",
  messagingSenderId: "668167598851",
  appId: "1:668167598851:web:cc1a649de0c60fe9566f36",
  measurementId: "G-MJ477XVHZW",
};

export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
