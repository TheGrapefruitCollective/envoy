import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDIYOKcZ5mQepqZDt5B76KVPWXCHA8IYxM',
  authDomain: 'envoy-90f8b.firebaseapp.com',
  projectId: 'envoy-90f8b',
  storageBucket: 'envoy-90f8b.appspot.com',
  messagingSenderId: '1005927280735',
  appId: '1:1005927280735:android:b1f6e6dddae304e52a6bea',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
