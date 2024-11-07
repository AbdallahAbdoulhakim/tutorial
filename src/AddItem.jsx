import React from "react";
import { MdAddCard } from "react-icons/md";

const AddItem = ({ newItem, setNewItem, addItem }) => {
  return (
    <form
      className="flex space-x-2 justify-between items-center"
      onSubmit={(e) => {
        e.preventDefault();
        addItem(newItem);
        setNewItem("");
      }}
    >
      <input
        className="flex-grow p-2 border border-blue-600 focus:border-blue-800 focus:border-2 rounded-md focus:outline-none"
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add a new grocy"
      />
      <MdAddCard
        className="border p-1 border-blue-600 rounded-md text-slate-400 hover:bg-blue-300 active:bg-blue-400 hover:text-slate-600"
        size={40}
        role="button"
        onClick={(e) => {
          e.preventDefault();
          addItem(newItem);
          setNewItem("");
        }}
      />
    </form>
  );
};

export default AddItem;
