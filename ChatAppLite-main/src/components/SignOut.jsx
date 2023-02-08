import { getAuth } from "firebase/auth";
import { app } from "../services/firebaseConfig";


export const SignOut = () => {
    const auth = getAuth(app);
    return (
        auth.currentUser && <button className="sign-out" onClick={() => auth.signOut()}>Sair</button>
    );
};



