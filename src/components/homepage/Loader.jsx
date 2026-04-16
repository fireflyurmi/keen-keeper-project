"use client";
import HashLoader from "react-spinners/HashLoader";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-2 w-full">
      <HashLoader color="#244d3f" size={60} loading={true} />
    </div>
  );
}