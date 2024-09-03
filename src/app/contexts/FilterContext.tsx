// contexts/FilterContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextType {
  selectedDepartment: string;
  handleDepartmentChange: (department: string) => void;
}

const FilterContext = createContext<FilterContextType>({
  selectedDepartment: "All",
  handleDepartmentChange: () => {},
});

export const useFilters = (): FilterContextType => useContext(FilterContext);

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const handleDepartmentChange = (department: string) => {
    setSelectedDepartment(department);
    console.log("Department changed to:", department); // Debug: Check if this logs correctly when a department is selected
  };

  return (
    <FilterContext.Provider
      value={{ selectedDepartment, handleDepartmentChange }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
