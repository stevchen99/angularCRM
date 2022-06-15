import { Component } from '@angular/core';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIjSWS8wF2vcRu45G8M1WiA0TK8l4PHaA",
  authDomain: "admincrm-ff6cc.firebaseapp.com",
  projectId: "admincrm-ff6cc",
  storageBucket: "admincrm-ff6cc.appspot.com",
  messagingSenderId: "154551621156",
  appId: "1:154551621156:web:0247e16a3533722edeaab1",
  measurementId: "G-GS8N5HRFZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testClar2';
 
}



