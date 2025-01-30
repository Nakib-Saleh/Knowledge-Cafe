import PropTypes from "prop-types";

const Blog = ({
  blog,
  handleBookMark,
  handleMarkRead,
  bookmarks,
  readTime,
}) => {
  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  let isBookmarked = bookmarks.some((b) => b.id == id);
  let isread = readTime.some((i) => i == id);

  return (
    <div className="mb-12 pb-7 border-b">
      <img src={cover} alt="Blog cover" className="w-full mb-7 rounded-2xl" />
      <div className="flex justify-between">
        <div className=" flex">
          <img className="w-1/2 h-1/2 md:w-16 md:h-16 rounded-full" src={author_img} alt="Author" />
          <div className="md:ml-6">
            <h3 className="text-2xl font-bold">{author}</h3>
            <p className="text-xl text-gray-400">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-2xl text-gray-400 mr-1.5">
            {reading_time} min read
          </p>
          <button onClick={() => handleBookMark(blog)}>
            {isBookmarked ? (
              <i className="fa-solid fa-bookmark text-xl font-bold"></i>
            ) : (
              <i className="fa-regular fa-bookmark text-xl font-bold"></i>
            )}
          </button>
        </div>
      </div>
      <h1 className="text-5xl font-bold mt-4 mb-4">{title}</h1>
      <p className="text-2xl text-gray-400 mt-4 mb-4">
        {hashtags.map((tag, index) => (
          <span key={index}>#{tag} </span>
        ))}
      </p>
      <button onClick={() => handleMarkRead(blog)}>
        {isread ? (
          <p className="text-2xl font-medium mb-7 p-1.5 bg-red-400 text-white rounded-xl">
            {" "}
            Mark As Unread
          </p>
        ) : (
          <p className="text-2xl font-medium mb-7 p-1.5 bg-sky-400 text-white rounded-xl">
            {" "}
            Mark As Read
          </p>
        )}
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author_img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    posted_date: PropTypes.string.isRequired,
    reading_time: PropTypes.number.isRequired,
    hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  handleBookMark: PropTypes.func.isRequired,
  handleMarkRead: PropTypes.func.isRequired,
  bookmarks: PropTypes.array,
  readTime: PropTypes.array,
};

export default Blog;
