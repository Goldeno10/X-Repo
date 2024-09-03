"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextType {
  selectedDepartment: string;
  setSelectedDepartment: (department: string) => void;
}

const FilterContext = createContext<FilterContextType>({
  selectedDepartment: "All",
  setSelectedDepartment: () => {},
});

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  return (
    <FilterContext.Provider
      value={{ selectedDepartment, setSelectedDepartment }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = (): FilterContextType => useContext(FilterContext);
