import './CreatePost.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../FireBase';
import { useNavigate } from 'react-router-dom';

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setPost(event.target.value);
  };

  const postsCollectionRef = collection(db, 'posts');
  let navigate = useNavigate();

  const createpost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate('/');
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="CreatePost">
      <div className="Post__container">
        <h1>Add Post</h1>
        <div className="Input__fields">
          <label> Title</label>
          <input
            placeholder="Title..."
            type="text"
            onChange={handleTitleChange}
          />
        </div>
        <div className="Input__fields">
          <label> Post </label>
          <textarea
            placeholder="Write Post..."
            onChange={handleTextChange}
          ></textarea>
        </div>
        <button onClick={createpost}>Add Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
