import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleBookMark, handleMarkRead, bookmarks, readTime }) => {
  let [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3 p-4">
      {blogs.map((blog) => (
        <Blog
          blog={blog}
          key={blog.id}
          handleBookMark={handleBookMark}
          handleMarkRead={handleMarkRead}
          bookmarks={bookmarks}
          readTime ={readTime}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
    handleBookMark: PropTypes.func.isRequired,
    handleMarkRead: PropTypes.func.isRequired,
    bookmarks: PropTypes.array,
    readTime: PropTypes.array,
  };
  
export default Blogs;
