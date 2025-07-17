const Input = ({ colorValue, setColorValue, isDarkText, setIsDarkText }) => {
  return (
    <form className="w-full max-w-md mx-auto flex flex-col gap-4">
      {/* Hidden label for accessibility */}
      <label htmlFor="colorInput" className="sr-only">
        Add Color Name:
      </label>

      <input
        id="colorInput"
        type="text"
        autoFocus
        placeholder="e.g. skyblue, tomato, gold"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
        }}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Color name input"
      />

      <button
        type="button"
        onClick={() => setIsDarkText(!isDarkText)}
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 font-semibold"
      >
        Toggle Text Color
      </button>
    </form>
  );
};

export default Input;
