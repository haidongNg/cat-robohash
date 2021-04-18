import './search-box.style.scss';
const SearchBox = ({placeholder, handleChange}) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
