import React from "react";
import Item from "./Item";

const ItemList = ({ items, handleDelete, handleCheck, search }) => {
  return (
    <ul className="flex mt-5 space-y-2 flex-col">
      {items
        .filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )
        .map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        ))}
    </ul>
  );
};

export default ItemList;
