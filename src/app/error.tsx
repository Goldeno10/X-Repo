"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error >>> ", error);
  return (
    <>
      <div>Unexpected error occured</div>
      <button className="btn" onClick={reset}>
        Try again
      </button>
    </>
  );
};

export default ErrorPage;
