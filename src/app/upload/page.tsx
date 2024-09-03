"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={300} alt="Test Image" />
      )}
      <br />
      <CldUploadWidget
        options={{
          sources: ["local"],
        }}
        uploadPreset="rdoj1zir"
        onSuccess={(result) => {
          const info = result.info as CloudinaryResult;
          // console.log("result XXXXXXXXXXXX  ", result);
          setPublicId(info.public_id);
        }}
        onError={(error) => {
          console.log(error);
        }}
      >
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;

// pages/api/upload.js
// import nextConnect from 'next-connect';
// import multer from 'multer';
// import path from 'path';
// import fs from 'fs';

// // Create a storage directory if it doesn't exist
// const storageDir = path.join(process.cwd(), 'public', 'uploads');
// if (!fs.existsSync(storageDir)) {
//   fs.mkdirSync(storageDir, { recursive: true });
// }

// // Set up Multer storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, storageDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// const apiRoute = nextConnect({
//   onError(error, req, res) {
//     res.status(501).json({ error: `Something went wrong: ${error.message}` });
//   },
//   onNoMatch(req, res) {
//     res.status(405).json({ error: `Method ${req.method} not allowed` });
//   },
// });

// apiRoute.use(upload.single('file'));

// apiRoute.post((req, res) => {
//   res.status(200).json({ data: 'File uploaded successfully', file: req.file });
// });

// export default apiRoute;

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

