import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-green-200 p-4 mb-4 rounded-xl">
      <h3 className="text-2xl">{title}</h3>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.object,
};
export default Bookmark;
