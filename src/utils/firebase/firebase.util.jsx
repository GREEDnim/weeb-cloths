import {initializeApp} from 'firebase/app'; 
import {getAuth,
     signInWithPopup,
     signInWithRedirect,
     GoogleAuthProvider,
    } from 'firebase/auth';
import {getFirestore,
doc,
getDoc,
setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAh8_Fk6RY9vzSXiZQxn4S8A_CljLaOIdg",
    authDomain: "weeb-db.firebaseapp.com",
    projectId: "weeb-db",
    storageBucket: "weeb-db.appspot.com",
    messagingSenderId: "551261825451",
    appId: "1:551261825451:web:211537a674d0c7b0af8aee"
  };
  
  // Initialize Firebase
   const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  //takes a custom object , to tell how google auth provider behaves
  provider.setCustomParameters(
    {prompt:"select_account"}
  );


  export const auth=getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);

export  const db=getFirestore();
export const createUserDocumentFromAuth = async (userAuth)=>{
const userDocRef = doc(db,'users',userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists())
  {
    const {displayName , email} = userAuth;
    const createdAt = new Date();
    try
    {
      await setDoc(userDocRef,{displayName,email,createdAt});
    }
    catch(error)
    {
      console.log(error.message)
    }
  }
  return userDocRef;
}