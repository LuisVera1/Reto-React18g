import { useState } from "react";
import { create as createUser } from "../../../services/users";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../../components/Input";

// CSS
import "./CreatePost.css";

export default function CreatePost() {
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
        <input
          className="form-control form-control-lg"
          name="title"
          placeholder="New post title here..."
          id="floatingTextareaTitle"
        ></input>
      </div>
      <div className="">
        <input
          className="form-control"
          name="hastags"
          placeholder="Add up to 4 tags..."
          id="floatingTextareaTags"
        ></input>
      </div>
      <div className="">
        <input
          className="form-control"
          name="fullPost"
          placeholder="Write your post content here..."
          id="floatingTextareaText"
        ></input>
        <input
          className="form-control"
          name="fullPost"
          placeholder="Add an URL link..."
          id="floatingTextareaText"
        ></input>
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
