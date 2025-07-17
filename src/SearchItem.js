const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="mb-4">
      <input
        type="text"
        id="search"
        role="searchbox"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 rounded-lg outline-none text-gray-900 placeholder-gray-500 shadow-sm border border-gray-300 focus:ring-2 focus:ring-blue-400"
      />
    </form>
  );
};

export default SearchItem;
