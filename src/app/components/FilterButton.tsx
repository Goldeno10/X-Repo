import React from "react";

const FilterButton = ({ filter, setFilter, option }: { filter: any, setFilter: (arg: any) => void, option: any }) => {
  const isActive = filter === option;
  return (
    <button
      onClick={() => setFilter(option)}
      className={`px-4 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "bg-white text-gray-700"} shadow transition duration-200`}
    >
      {option.charAt(0).toUpperCase() + option.slice(1)}
    </button>
  );
};

export default FilterButton;
