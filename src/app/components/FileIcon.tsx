import React from "react";
import {
  FaFilePdf,
  FaFileWord,
  FaFileImage,
  FaFileVideo,
  FaFileExcel,
  FaFilePowerpoint,
} from "react-icons/fa";

interface Props {
  type: string;
  iconStyle?: string;
}
const iconStyle = "w-6 h-6 text-2xl";

const FileIcon = ({ type, iconStyle = "text-2xl" }: Props) => {
  switch (type) {
    case "application/pdf":
      return <FaFilePdf className={`${iconStyle} text-red-500`} />;
    case "application/msword":
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return <FaFileWord className={`${iconStyle} text-blue-500`} />;
    case "image/jpeg":
    case "image/png":
      return <FaFileImage className={`${iconStyle} text-green-500`} />;
    case "video/mp4":
      return <FaFileVideo className={`${iconStyle} text-purple-500`} />;
    case "application/vnd.ms-excel":
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return <FaFileExcel className={`${iconStyle} text-green-600`} />;
    case "application/vnd.ms-powerpoint":
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      return <FaFilePowerpoint className={`${iconStyle} text-orange-500`} />;
    default:
      return <FaFileWord className={`${iconStyle} text-gray-500`} />; // Default case for unknown or miscellaneous file types
  }
};

export default FileIcon;
