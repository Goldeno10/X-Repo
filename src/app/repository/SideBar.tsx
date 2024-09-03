"use client";
import { useFilters } from "@/app/contexts/FilterContext";
import { useSession } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

interface FilterContextType {
  selectedDepartment: string;
  handleDepartmentChange: (department: string) => void;
}

const Sidebar = () => {
  const { data: session } = useSession();
  const { selectedDepartment, handleDepartmentChange } =
    useFilters() as FilterContextType;

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-4 text-white bg-gray-800 fixed top-0 left-0 z-20"
      >
        <FaBars />
      </button>

      <aside
        className={`fixed top-0 left-0 md:relative h-full bg-gray-800 text-white p-3 shadow-md transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out w-64`}
      >
        {/* User Information */}
        <div className="flex items-center mb-8 pt-24 flex-col gap-5">
          <FaUserCircle className="h-20 w-20 mr-3" />

          <div className="overflow-hidden">
            <h2 className="text-justify font-bold text-wrap text-ellipsis max-w-60 overflow-hidden">
              {session ? session.user?.name : "Anonymous"}
            </h2>
          </div>
        </div>
        <hr className="w-full mb-10" />
        {/* Department Filter */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Department</h3>
          <ul className="space-y-2">
            {["All", "Computer Engineering", "Electrical Engineering"].map(
              (department) => (
                <li key={department}>
                  <button
                    onClick={() => handleDepartmentChange(department)}
                    className={`w-full text-left py-2 px-4 rounded ${
                      selectedDepartment === department
                        ? "bg-blue-600"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    {department}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </aside>

      {/* Backdrop for mobile view */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
