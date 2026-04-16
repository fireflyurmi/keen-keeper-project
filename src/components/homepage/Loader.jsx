"use client";

import HashLoader from "react-spinners/HashLoader";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-2">
      <HashLoader color="#244d3f" size={60} />
    </div>
  );
}