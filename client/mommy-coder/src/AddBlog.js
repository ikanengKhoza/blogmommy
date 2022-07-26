import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddAVideo = () => {
  const [title, setTitle] = useState(" ");
  const [text, setText] = useState(" ");
  const [author, setAuthor] = useState(" ");
  const baseURL = "https://blog-mommy.herokuapp.com/";

  //const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { title, text, author };
    axios
      .post(baseURL, newBlog)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.response.data));

    //navigate("/");
  };

  const onClickCancelButton = (e) => {
    e.preventDefault();
    //navigate("/");
  };

  return (
    <>
      <div className="add-a-video">
        <form onSubmit={handleSubmit}>
          <div className="card labels">
            <label for="title">
              Title:
              <input
                className="input is-primary"
                placeholder="enter title"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                required
                value={title}
              />
            </label>

            <label for="title">
              Text:
              <input
                className="input is-info"
                placeholder="enter url"
                onChange={(e) => setText(e.target.value)}
                type="text"
                required
                value={text}
              />
            </label>

            <label for="rating">
              {" "}
              Author
              <input
                className="input is-primary"
                placeholder="enter rating"
                onChange={(e) => setAuthor(e.target.value)}
                type="text"
                required
                value={author}
              />
            </label>
          </div>

          <div className="add-video-button">
            <button
              className="button is-rounded is-success"
              onClick={handleSubmit}
            >
              submit
            </button>
            <button
              className="button is-rounded is-danger"
              onClick={onClickCancelButton}
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddAVideo;
