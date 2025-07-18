import { FaTrashAlt } from "react-icons/fa";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Square from "./Square";
import Input from "./Input";

const Content = ({
  // Random Name Generator
  name,
  handleNameChange,
  // Counter Section
  count,
  increment,
  decrement,
  // Todo App
  title,
  items,
  handleCheck,
  handleDelete,
  // Add Item in Input
  newItem,
  setNewItem,
  handleSubmit,
  // Search Item
  search,
  setSearch,
  // Error Handling
  fetchError,
  isLoading,
  // Color Change
  colorValue,
  hexValue,
  isDarkText,
  setColorValue,
  setHexValue,
  setIsDarkText,
}) => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8 font-semibold">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl mx-auto">
          {/* 🔹 Random Name Generator & Counter */}
          <div className="md:col-span-1 flex flex-col gap-8">
            {/* Random Name Generator */}
            <div
              onClick={handleNameChange}
              className="bg-orange-300 text-2xl shadow-md p-6 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center space-y-6"
            >
              <h2>
                Let's <span className="text-blue-600">{name}</span> Money!
              </h2>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow">
                Change!
              </button>
            </div>

            {/* Counter */}
            <div className="bg-yellow-300 shadow-md p-6 rounded-lg flex flex-col items-center justify-center text-center space-y-6">
              <h2 className="text-2xl text-gray-700">
                Increment / Decrement Counter
              </h2>
              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={decrement}
                  className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-2xl rounded shadow font-bold"
                >
                  –
                </button>
                <span className="text-4xl text-gray-800">{count}</span>
                <button
                  onClick={increment}
                  className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-2xl rounded shadow font-bold"
                >
                  +
                </button>
              </div>
            </div>
            {/* Color Change */}
            <div className="bg-gray-300  shadow-md p-6 rounded-lg flex flex-col items-center justify-center text-center space-y-6">
              <Square
                colorValue={colorValue}
                hexValue={hexValue}
                isDarkText={isDarkText}
              />
              <Input
                colorValue={colorValue}
                setColorValue={setColorValue}
                setHexValue={setHexValue}
                isDarkText={isDarkText}
                setIsDarkText={setIsDarkText}
              />
            </div>
          </div>
          {/* 🔹 Todo List App */}
          <>
            <div className="md:col-span-3 p-4 bg-blue-400 rounded-lg text-lg">
              <h4 className="m-2">{title}</h4>
              <div className="flex flex-col sm:flex-row gap-2 mb-4">
                {/* AddItem takes more space */}
                <div className="flex-grow">
                  <AddItem
                    newItem={newItem}
                    setNewItem={setNewItem}
                    handleSubmit={handleSubmit}
                  />
                </div>

                {/* SearchItem smaller on large screens */}
                <div className="w-full sm:w-1/3 flex flex-col gap-2">
                  <SearchItem search={search} setSearch={setSearch} />
                </div>
              </div>
              {items.length ? (
                <ul className="space-y-3 mt-4">
                  {items
                    .filter((item) =>
                      item.item.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between bg-gray-200 p-2 rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            onChange={() => handleCheck(item.id)}
                            checked={item.checked}
                            className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            className={`font-medium cursor-pointer ${
                              item.checked
                                ? "line-through text-gray-500"
                                : "underline text-gray-800"
                            }`}
                            onDoubleClick={() => handleCheck(item.id)}
                          >
                            {item.item}
                          </label>
                        </div>

                        <button className="text-red-500 hover:text-red-700 transition-colors">
                          <FaTrashAlt
                            role="button"
                            tabIndex="0"
                            size={18}
                            onClick={() => handleDelete(item.id)}
                          />
                        </button>
                      </li>
                    ))}
                </ul>
              ) : (
                <div>
                  <p>{isLoading ? `${isLoading}` : "List is Loading"}</p>
                  <p className="text-center text-gray-800 text-lg font-medium mt-6">
                    {fetchError ? `${fetchError}` : "🎉 Your list is empty!"}
                  </p>
                </div>
              )}
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Content;
