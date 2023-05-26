import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import {useNavigate} from "react-router-dom"

// eslint-disable-next-line react/prop-types
function Login({ setIsAuth }) {
  const navigate = useNavigate()
  const signInWithGoogle = () => {
    // eslint-disable-next-line no-unused-vars
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate('/')
    });
  };

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button
        
        type="button"
        className="login-with-google-btn"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
