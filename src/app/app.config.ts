import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp as initializeFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlXesgUJ2uyognKAM6ZtvgxUSefOWcPyQ",
  authDomain: "prueba-163d0.firebaseapp.com",
  databaseURL: "https://prueba-163d0-default-rtdb.firebaseio.com",
  projectId: "prueba-163d0",
  storageBucket: "prueba-163d0.firebasestorage.app",
  messagingSenderId: "246584701043",
  appId: "1:246584701043:web:c9641f5f791db68d58ba06",
  measurementId: "G-KMRL472HV4"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeFirebaseApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),

  ]
};
