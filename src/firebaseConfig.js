
import {initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAm4qpI_iHua0qH5UtQNladmr20RN5gTvc",
  authDomain: "food-delivary-e258a.firebaseapp.com",
  projectId: "food-delivary-e258a",
  storageBucket: "food-delivary-e258a.appspot.com",
  messagingSenderId: "357987146344",
  appId: "1:357987146344:web:d1e3913d518387934cb9dd"
};

const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;