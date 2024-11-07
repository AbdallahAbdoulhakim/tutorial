import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist")) || []
  );

  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    if (!item) return;
    const newId = items.length ? items.length : 0;
    const listItems = [...items, { id: newId, item: item, checked: false }];
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  return (
    <div className="App container mx-auto h-screen flex flex-col">
      <Header />
      <Content
        items={items}
        setItems={setItems}
        newItem={newItem}
        setNewItem={setNewItem}
        addItem={addItem}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        search={search}
        setSearch={setSearch}
      />
      <Footer length={items.length} />
    </div>
  );
};

export default App;
