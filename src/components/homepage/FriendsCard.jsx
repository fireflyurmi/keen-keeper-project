// src/components/homepage/FriendsCard.jsx
"use client"; 
import Image from "next/image";

export default function FriendsCard({ friend }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "on-track": return "bg-[#244d3f] text-white";
      case "almost due": return "bg-[#efad44] text-white";
      case "overdue": return "bg-[#ef4444] text-white";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
      <div className="relative w-20 h-20 mb-4">
        <Image
          src={friend.picture}
          alt={friend.name}
          fill
          className="rounded-full object-cover"
        />
      </div>

      <h3 className="text-lg font-bold text-gray-900">{friend.name}</h3>
      <p className="text-xs text-gray-400 mb-3">{friend.days_since_contact}d ago</p>

      <div className="flex gap-2 mb-4">
        {friend.tags.map((tag, index) => (
          <span key={index} className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded uppercase">
            {tag}
          </span>
        ))}
      </div>

      <div className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase ${getStatusColor(friend.status)}`}>
        {friend.status}
      </div>
    </div>
  );
}