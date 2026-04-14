import Link from "next/link";
import React from "react";
import { FiHome } from "react-icons/fi";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-3">
      <h2 className="font-bold text-7xl text-[#1a8862]">404</h2>
      <h3 className="font-bold text-3xl">Page Not Found</h3>
      <p className="text-gray-500 text-center max-w-md">
        Looks like this friendship link is broken. The page you are looking for
        does not exist or has been moved.
      </p>

      <button className="flex items-center gap-2 bg-[#1a8862] text-white px-6 py-3 rounded hover:opacity-90 transition">
        <FiHome />
        <Link href={'/'}><span>Back to Home</span></Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
