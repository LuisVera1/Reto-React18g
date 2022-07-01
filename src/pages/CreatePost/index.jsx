import { useState } from "react";
import { create as createPost } from "../../../src/services/users";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../../src/components/Input";
import ToolbarPost from "../../components/ToolbarPost";

// CSS
import "./CreatePost.css";

export default function CreatePost() {
  // Local state
  const [autorName, setAutorName] = useState("");
  const [title, setTitle] = useState("");
  const [hashtags, setHashtags] = useState([]);
  const [fullPost, setFullPost] = useState("");
  const [reactions, setReactions] = useState("");
  const [imgPost, setImgPost] = useState("");
  const [date, setDate] = useState("");
  const [coments, setComents] = useState([]);

  const cleanForm = () => {
    setTitle("");
    setHashtags("");
    setFullPost("");
    setImgPost("");
  };

  const handleSubmit2 = () => {
    setAutorName("Nestor Ramirez");
    setDate(new Date());
    setReactions(6);
    setComents("Genial");
  };

  const isEmpty = (value) => !value;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      isEmpty(title) ||
      isEmpty(hashtags) ||
      isEmpty(fullPost) ||
      isEmpty(imgPost)
    ) {
      toast.error("Llena el form!!!!");
      return;
    }

    const data = {
      title,
      hashtags,
      fullPost,
      imgPost,
      autorName,
      reactions,
      date,
      coments,
    };

    try {
      await createPost(data);
      toast.success("Todo fine!!");
      cleanForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-post-container">
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div>
            <img
              id="LogoNB"
              src="/devto/public/logo192.png"
              width="60px"
              alt="Logo"
            />

            <p>Create Post</p>
          </div>
          <div>
            <button id="LoginNB" className="btn FGray " type="button">
              Edit
            </button>
            <button id="CreateANB" className="btn FBold" type="button">
              Preview
            </button>
          </div>
        </div>
      </nav>
      <form onSubmit={handleSubmit}>
        <Input
          className="form-control-title"
          name="title"
          placeholder="New post title here..."
          id="floatingTextareaTitle"
          value={title}
          callback={(e) => setTitle(e.target.value)}
        />
        <Input
          className="form-control-hashtag"
          name="hastags"
          placeholder="Add up to 4 tags..."
          id="floatingTextareaTags"
          value={hashtags}
          callback={(e) => setHashtags(e.target.value)}
        />
        <ToolbarPost />
        <Input
          className="form-control-fullpost"
          name="fullPost"
          placeholder="Write your post content here..."
          id="floatingTextareaText"
          value={fullPost}
          callback={(e) => setFullPost(e.target.value)}
        />
        <Input
          className="form-control-image"
          name="fullPost"
          placeholder="Add a cover image URL link..."
          id="floatingTextareaText"
          value={imgPost}
          callback={(e) => setImgPost(e.target.value)}
        />
        <button
          onClick={handleSubmit2}
          id="publish-post"
          type="submit"
          className="btn btn-primary"
        >
          Publish
        </button>
        <button
          id="savedraft"
          type="button"
          className="btn btn-outline-secondary"
        >
          Save draft
        </button>
        <button
          id="display"
          type="button"
          className="btn btn-outline-secondary"
        >
          Display
        </button>
        <button
          id="newchanges"
          type="button"
          className="btn btn-outline-secondary"
        >
          Revert new changes
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
