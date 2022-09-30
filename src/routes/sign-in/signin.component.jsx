import { signInWithGooglePopup , createUserDocumentFromAuth} from '../../utils/firebase/firebase.util'


const  SignIn=()=>{
    const logGoogleUser=async ()=>{
        const {user} =await signInWithGooglePopup();
        const userDoc = await createUserDocumentFromAuth(user);
        console.log(user);
    }
    return(
        <div>
            <h1>Sign in successful</h1> 
            <button onClick={logGoogleUser}>SIGN IN WITH GOOGLE POPUP</button>
        </div>
        
    )
}
export default SignIn;