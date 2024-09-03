"use client";
import { useFilters } from "@/contexts/FilterContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FileIcon from "../components/FileIcon";
import FilterButton from "../components/FilterButton";

const filterMappings: { [key: string]: string } = {
  all: "all",
  PDF: "application/pdf",
  Word: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  Excel: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  PowerPoint:
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  Video: "video/mp4",
};

const filterOptions = Object.keys(filterMappings);

const LibraryPage = () => {
  const router = useRouter();
  const [filter, setFilter] = useState("all");
  const { selectedDepartment } = useFilters(); // Ensure selectedDepartment is correctly used
  const [materials, setMaterials] = useState<
    { id: string; type: string; name: string; size: string; category: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMaterials();
  }, []);

  useEffect(() => {
    console.log("Current selectedDepartment:", selectedDepartment);
  }, [selectedDepartment]);

  const fetchMaterials = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/materials");
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setMaterials(data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleItemClick = (id: string) => {
    router.push(`/repository/${id}`);
  };

  // Enhanced filtering to account for department and type
  const filteredMaterials = materials.filter(
    (material) =>
      (filter === "all" || material.type === filterMappings[filter]) &&
      (selectedDepartment === "All" || material.category === selectedDepartment)
  );

  return (
    <div className="p-8 bg-gray-100 max-h-screen mt-8 pb-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Repository</h1>
      <div className="flex space-x-4 mb-8 flex-wrap gap-2">
        {filterOptions.map((option) => (
          <FilterButton
            key={option}
            filter={filter}
            setFilter={() => setFilter(option)}
            option={option}
          />
        ))}
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="spinner border-4 border-blue-500 border-dashed rounded-full w-8 h-8"></div>
        </div>
      ) : error ? (
        <div className="text-center">
          <p className="text-red-500">Error loading materials: {error}</p>
          <button onClick={fetchMaterials} className="btn btn-primary mt-4">
            Retry
          </button>
        </div>
      ) : filteredMaterials.length === 0 ? (
        <p className="text-center">No materials found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-10">
          {filteredMaterials.map((material) => (
            <div
              key={material.id}
              onClick={() => handleItemClick(material.id)}
              className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6 cursor-pointer hover:scale-105 transition-transform h-70 flex-col w-50"
            >
              <FileIcon
                type={material.type}
                iconStyle="text-2xl h-full w-full"
              />
              <div className="flex-1 min-w-0 w-full">
                <h3 className="text-sm text-wrap font-semibold text-gray-700 truncate w-full  text-ellipsis line-clamp-2">
                  {material.name}
                </h3>
                <p className="text-lg text-gray-500">
                  {(parseInt(material.size) / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LibraryPage;
