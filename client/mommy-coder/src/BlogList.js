import { useEffect, useState } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://newfullstac.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  if (!blogs) return null;

  return (
    <>
      <h1>All Blogs</h1>
      <div>
        {blogs.map((element) => {
          return (
            <>
              <p>{element.title}</p>
             
              <h4>#{element.author}</h4>
            </>
          );
        })}
      </div>
    </>
  );
};

export default BlogList;
