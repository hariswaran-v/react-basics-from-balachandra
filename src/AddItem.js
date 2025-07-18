import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form
      className="flex flex-col sm:flex-row gap-2 sm:gap-0 mb-4"
      onSubmit={handleSubmit}
    >
      <input
        autoFocus
        ref={inputRef}
        type="text"
        id="addItem"
        placeholder="Add a new task..."
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        className="w-full sm:flex-grow px-4 py-2 rounded sm:rounded-l-lg sm:rounded-r-none outline-none text-gray-900 placeholder-gray-500"
      />
      <button
        type="submit"
        onClick={() => inputRef.current.focus()}
        className="w-full sm:w-auto bg-white text-blue-600 px-4 py-2 rounded sm:rounded-r-lg sm:rounded-l-none hover:bg-rose-500 hover:text-white transition-colors"
        aria-label="Add Item"
      >
        <FaPlus className="mx-auto" />
      </button>
    </form>
  );
};

export default AddItem;
