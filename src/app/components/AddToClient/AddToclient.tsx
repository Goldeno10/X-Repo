"use client";
import React from "react";

const AddToclient = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => console.log("Clicked")}
      >
        Add to Cart
      </button>
      {/* <input
        type="checkbox"
        value="synthwave"
        className="toggle theme-controller"
      /> */}
    </div>
  );
};

export default AddToclient;
