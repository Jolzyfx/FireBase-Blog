
import { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

// eslint-disable-next-line react/prop-types
const Home = ({isAuth}) => {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "flame");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  const deletePost = async (id) => {
    const postDoc = doc(db, "flame", id);
    await deleteDoc(postDoc);
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        // eslint-disable-next-line react/jsx-key
        return (
          <>
            <div className="post">
              <div className="postHeader">
                <div className="title">
                  <h1>{post.title}</h1>
                  <div className="deletePost">
                   
                   {isAuth && post.author.id === auth.currentUser.uid &&(
                    <button
                      onClick={() => {
                        deletePost(post.id);
                      }}
                    >
                      &#128465;
                    </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="postTextContainer"> {post.postText}</div>
              <h4 className="pp">@{post.author.name}</h4>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Home;
