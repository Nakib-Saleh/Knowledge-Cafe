import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  let [bookmarks, setBookmarks] = useState([]);
  let [readTime, setreadTime] = useState([]);
  let [time, setTime] = useState(0);

  let handleBookMark = (blog) => {
    let isPresent = bookmarks.some((bl) => bl.id == blog.id);
    if (!isPresent) {
      console.log("Bok marked", blog.id);
      setBookmarks([...bookmarks, blog]);
    } else {
      setBookmarks((prevBookmarks) => {
        return prevBookmarks.filter((bl) => bl.id != blog.id);
      });
    }
  };

  let handleMarkRead = (blog) => {
    console.log("mark as read");
    let isPresent = readTime.some((id) => id == blog.id);
    if (!isPresent) {
      setreadTime([...readTime, blog.id]);
      setTime(time+ blog.reading_time);
    } else {
      setTime(time- blog.reading_time);
      setreadTime((prevReadTime)=>{
        return prevReadTime.filter(id => id != blog.id);
      })
    }
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleBookMark={handleBookMark}
          handleMarkRead={handleMarkRead}
          bookmarks={bookmarks}
          readTime = {readTime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} time={time}></Bookmarks>
      </div>
    </>
  );
}

export default App;
