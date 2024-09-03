import Image from "next/image";
import { FaUserPlus, FaUpload, FaShareSquare } from "react-icons/fa"; // Import icons

const FeaturesSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-[70vh] bg-gray-100 p-8 mt-12 gap-8">
      <div className="flex flex-col items-center h-full w-full md:w-[30%] bg-blue-100 p-6 rounded-lg shadow-lg">
        <div className="w-24 h-24 mb-4 flex justify-center items-center text-blue-500">
          <FaUserPlus size={48} />{" "}
          {/* User plus icon for creating an account */}
        </div>
        <h1 className="text-2xl font-semibold text-center mb-2">
          Create an account
        </h1>
        <p className="text-center text-gray-700">
          Quickly sign up to efficiently manage and securely store your files
          with our user-friendly platform.
        </p>
      </div>

      <div className="flex flex-col items-center h-full w-full md:w-[30%] bg-green-100 p-6 rounded-lg shadow-lg">
        <div className="w-24 h-24 mb-4 flex justify-center items-center text-green-500">
          <FaUpload size={48} /> {/* Upload icon for uploading files */}
        </div>
        <h1 className="text-2xl font-semibold text-center mb-2">
          Upload your file
        </h1>
        <p className="text-center text-gray-700">
          Easily upload any file type using our simple, robust drag-and-drop or
          upload interface for seamless management.
        </p>
      </div>

      <div className="flex flex-col items-center h-full w-500 md:w-[30%] bg-yellow-100 p-6 rounded-lg shadow-lg">
        <div className="w-24 h-24 mb-4 flex justify-center items-center text-yellow-500">
          <FaShareSquare size={48} /> {/* Share icon for sharing files */}
        </div>
        <h1 className="text-2xl font-semibold text-center mb-2">
          Share files instantly
        </h1>
        <p className="text-center text-gray-700 text-xl">
          Instantly share files securely with colleagues or clients, enhancing
          collaboration and communication.
        </p>
      </div>
    </div>
  );
};

export default FeaturesSection;
