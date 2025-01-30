import Bookmark from "../Bookmark/Bookmark";
import "./Bookmarks.css";
import PropTypes from 'prop-types';

const Bookmarks = ({ bookmarks, time }) => {
  return (
    <div className="md:w-1/3 md:sticky top-0 h-screen overflow-y-auto">
      <h1 className="bg-[#efecfd] pl-12 pt-5 pb-5 text-2xl font-bold rounded-xl mb-6 mt-4">Spent Time on Read: {time}</h1>
      <div className="p-5 max-h-fit bg-[#11111122] rounded-xl">
        <h1 className="mb-4.5 text-2xl font-bold ">
          Bookmark Blogs : {bookmarks.length}
        </h1>
        {bookmarks.map((bookmark) => (
          <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes={
  bookmarks: PropTypes.array,
  time: PropTypes.number
}

export default Bookmarks;
