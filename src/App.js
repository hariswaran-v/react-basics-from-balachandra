import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Square from "./Square";
import Input from "./Input";

import { useEffect, useState } from "react";

const App = () => {
  // 🔹 Random Name Generator
  const [name, setName] = useState("Generate");
  const handleNameChange = () => {
    const names = ["Grow", "Earn", "Achieve", "Create", "Improve"];
    const index = Math.floor(Math.random() * names.length);
    setName(names[index]);
  };
  // 🔹 Counter Section
  const [count, setCount] = useState(0);
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
  const [newItem, setNewItem] = useState("");
  // 🔹 Add Item
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setItems(listItems); // ✅ this will also trigger useEffect below
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
  // 🔹 Save to localStorage when `items` changes
  useEffect(() => {
    localStorage.setItem("todo_list", JSON.stringify(items));
  }, [items]);
  const [search, setSearch] = useState("");
  // Color Change
  const [colorValue, setColorValue] = useState("");
  const [hexValue, SetHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div>
      <Header title="Vanakkam da maapla theni la irundhu" />

      {/* 👇 Now Content receives AddItem props too */}
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
        // Color Change
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
        setColorValue={setColorValue}
        setIsDarkText={setIsDarkText}
      />

      <Footer />
    </div>
  );
};

export default App;
