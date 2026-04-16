"use client";
import dynamic from 'next/dynamic';

const HashLoader = dynamic(() => import('react-spinners/HashLoader'), { ssr: false });

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-2">
      <HashLoader color="#244d3f" size={60} />
    </div>
  );
}