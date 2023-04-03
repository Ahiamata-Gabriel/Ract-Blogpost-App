import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Home from './Comonents/Home';
import Login from './Comonents/Login';
import CreatePost from './Comonents/CreatePost';
import { auth } from './FireBase';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login';
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>

        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <Link to="/createpost">Add Post</Link>
            <button onClick={signUserOut} className="Nav__btn">
              Log Out
            </button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home setIsAuth={setIsAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
