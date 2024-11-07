import React from "react";
import { GoTrash } from "react-icons/go";

const Item = ({ item, handleDelete, handleCheck }) => {
  return (
    <div className="group/item bg-slate-200 border min-h-10 p-3 border-slate-400 rounded-lg flex items-center">
      <div className="group-btn">
        <label className="hidden" htmlFor="group-check">
          Check {item.item}
        </label>
        <input
          className="w-8 h-8 peer/check"
          type="checkbox"
          checked={item.checked}
          name="group-check"
          onChange={() => handleCheck(item.id)}
        />
      </div>
      <div className="group-has-[:checked]/item:line-through text-box ml-5 flex-grow text-lg text-blue-400">
        {item.item}
      </div>
      <div className="gourp-btn">
        <GoTrash
          onClick={() => handleDelete(item.id)}
          size={30}
          className="hidden group-hover/item:block group-has-[:checked]/item:hidden  text-blue-700 cursor-pointer hover:text-blue-500 active:scale-95"
        />
      </div>
    </div>
  );
};

export default Item;
