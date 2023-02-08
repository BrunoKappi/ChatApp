import { getAuth } from "firebase/auth";
import { app } from "../services/firebaseConfig";
import User from "../../images/User.png"

export const ChatMessage = (props) => {

    const { text, uid, photoURL } = props.message;

    const auth = getAuth(app);

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL || User} />
            <p>{text}</p>
        </div>
    );
};  