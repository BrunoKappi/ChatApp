import { getAuth } from "firebase/auth";
import { app } from "../services/firebaseConfig";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";


export const SignIn = () => {
    const auth = getAuth(app);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return <button className="login-with-google-btn" onClick={() => signInWithGoogle()}>Entrar Com Google</button>;
};