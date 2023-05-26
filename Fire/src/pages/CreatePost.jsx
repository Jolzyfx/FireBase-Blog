import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "flame");
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(()=>{
   if (!isAuth){
    navigate("/login")
   }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="createpostpage">
      <div className="cpContainer">
        <h1 className="cp">Create A Post</h1>
        <div className="mb-3 ">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">New Post</label>
          <textarea
            className="form-control"
            placeholder="Post..."
            rows="3"
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={createPost}
        >
          Submit Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
