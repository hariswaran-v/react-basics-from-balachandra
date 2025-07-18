import apiRequest from "./apiRequest";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

import { useEffect, useState } from "react";

const App = () => {
  // 🔹 Random Name Generator
  const [name, setName] = useState("Generate");
  const [count, setCount] = useState(0);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  // Error Handling on Todo List
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [colorValue, setColorValue] = useState("");
  const [hexValue, SetHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  const API_URL = "http://localhost:3000/item";

  const handleNameChange = () => {
    const names = ["Grow", "Earn", "Achieve", "Create", "Improve"];
    const index = Math.floor(Math.random() * names.length);
    setName(names[index]);
  };
  // 🔹 Counter Section
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  // 🔹 To-Do App State
  const [items, setItems] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("todo_list"));
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });
  // Todo List

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Data fetch failed");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 500);
  }, []);

  // 🔹 Add Item
  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setItems(listItems);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(addNewItem),
    };

    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return; // avoid empty tasks
    addItem(newItem);
    setNewItem("");
  };
  // 🔹 Toggle Check
  const handleCheck = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
  // 🔹 Delete Item
  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  return (
    <div>
      <Header title="Vanakkam da maapla theni la irundhu" />

      <main>
        <p className="text-center">{isLoading}</p>
        {fetchError && <p className="text-center">{`Error: ${fetchError}`}</p>}

        <Content
          // Name Generator
          name={name}
          handleNameChange={handleNameChange}
          // Counter
          count={count}
          increment={increment}
          decrement={decrement}
          // Todo App
          title="📆 Plan Your Day, One Task at a Time"
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLocaleLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          // Add Item
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
          // Search Item
          search={search}
          setSearch={setSearch}
          // Error handling on Todo List
          fetchError={fetchError}
          setFetchError={setFetchError}
          // Color Change
          colorValue={colorValue}
          hexValue={hexValue}
          isDarkText={isDarkText}
          setColorValue={setColorValue}
          setIsDarkText={setIsDarkText}
        />
      </main>

      <Footer />
    </div>
  );
};

export default App;
