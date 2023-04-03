import './Home.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
import { auth, db } from '../FireBase';

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, 'posts');

  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post" key={post.id}>
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
            </div>
            <div className="postTextContainer"> {post.post} </div>
            <div className="deletePost">
              {isAuth && post.author.id === auth.currentUser.uid && (
                <button
                  className="btn"
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  Delete
                </button>
              )}
            </div>
            <h3>{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
