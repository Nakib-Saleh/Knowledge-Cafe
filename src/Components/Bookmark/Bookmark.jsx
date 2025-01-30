import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
  return (
    <div className="w-1/1 bg-[#ffffff] p-5 mb-4.5 rounded-xl">
      <h1 className="text-xl font-medium">{bookmark.title}</h1>
    </div>
  );
};
Bookmark.propTypes={
    bookmark: PropTypes.object,
}

export default Bookmark;
