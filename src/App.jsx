import { getAuth } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import "./global.css";
import { app } from "./services/firebaseConfig";
import Logo from "../images/LogoChat.png"
import { SignIn } from "./components/SignIn";
import { SignOut } from "./components/SignOut";
import { ChatRoom } from "./components/ChatRoom";

const auth = getAuth(app);

export const App = () => {
  const [user] = useAuthState(auth); 
  return (
    <div className='App'>
      <header>
        <img className="logoImg" src={Logo} alt="" />
        <SignOut />
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
};






