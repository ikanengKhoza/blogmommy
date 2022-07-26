import react, { useState, useEffect } from "react";

const BlogList = () => {
  const [allBlogs, setAllBlogs] = useState();

  useEffect(() => {
    fetch("http://localhost:3100/")
      .then((res) => res.json())
      .then((data) => console.log(data)); //set blogs here
  });

  return (
    <div>
      <h1>All Blogs</h1>
    </div>
  );
};

export default BlogList;
