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
