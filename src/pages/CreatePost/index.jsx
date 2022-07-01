import { useState } from "react";
import { create as createPost } from "../../../services/users";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../../components/Input";

// CSS
import "./CreatePost.css";

export default function CreatePost() {
  // Local state
  //const [autorName, setAutorName] = useState("");
  const [title, setTitle] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [fullPost, setFullPost] = useState("");
  //const [reactions, setReactions] = useState("");
  const [imgPost, setImgPost] = useState("");
  //const [date, setDate] = useState("");
  //const [coments, setImgComents] = useState("");

  const cleanForm = () => {
    setTitle("");
    setHashtags("");
    setFullPost("");
    setImgPost("");
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
    <div>
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
            <button id="LoginNB" className="btn FGray " type="submit">
              Edit
            </button>
            <button id="CreateANB" className="btn FBold" type="submit">
              Preview
            </button>
          </div>
        </div>
      </nav>
      <div className="">
        <Input
          className="form-control form-control-lg"
          name="title"
          placeholder="New post title here..."
          id="floatingTextareaTitle"
          value={title}
          callback={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="">
        <Input
          className="form-control"
          name="hastags"
          placeholder="Add up to 4 tags..."
          id="floatingTextareaTags"
          value={hashtags}
          callback={(e) => setHashtags(e.target.value)}
        />
      </div>
      <div className="">
        <Input
          className="form-control"
          name="fullPost"
          placeholder="Write your post content here..."
          id="floatingTextareaText"
          value={fullPost}
          callback={(e) => setFullPost(e.target.value)}
        />
        <Input
          className="form-control"
          name="fullPost"
          placeholder="Add an URL link..."
          id="floatingTextareaText"
          value={imgPost}
          callback={(e) => setImgPost(e.target.value)}
        />
      </div>

      <nav>
        <button id="publish-post" type="button" className="btn btn-primary">
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
      </nav>
    </div>
  );
}
