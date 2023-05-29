import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzwSyCmyrGfL7bWsT8R4mTqCtk0P3n-eAcc21p",
  authDomain: "robertoproyecto-dbe13.firebaseapp.com",
  projectId: "robertoproyecto-dbe13",
  storageBucket: "robertoproyecto-dbe13.appspot.com",
  messagingSenderId: "368357712118",
  appId: "1:168157428237:web:0346a9856e712b23dbc399",
  measurementId: "A-6TY5VRSFAE"
};

// Inicializar la aplicación de Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
