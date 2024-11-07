import React from "react";
import AddItem from "./AddItem";
import Search from "./Search";
import ItemList from "./ItemList";

const Content = ({
  items,
  setItems,
  newItem,
  setNewItem,
  addItem,
  handleDelete,
  handleCheck,
  search,
  setSearch,
}) => {
  return (
    <div className="flex-grow border p-5 border-blue-400">
      <AddItem newItem={newItem} setNewItem={setNewItem} addItem={addItem} />
      <Search search={search} setSearch={setSearch} />
      <ItemList
        items={items}
        setItems={setItems}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        search={search}
      />
    </div>
  );
};

export default Content;
