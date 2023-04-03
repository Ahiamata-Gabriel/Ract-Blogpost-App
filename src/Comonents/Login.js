import './Login.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../FireBase';
import { signInWithPopup } from 'firebase/auth';

function Login(props) {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true);
      props.setIsAuth(true);
      navigate('/');
    });
  };

  return (
    <div className="login">
      <p>Sign In with your google account </p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
