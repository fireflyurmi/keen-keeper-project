"use client";
import { useState } from 'react';
import { useGlobalInteractions } from '@/lib/context/InteractionContext';
import { FaPhoneAlt, FaCommentDots, FaVideo } from "react-icons/fa";

const filterOptions = ['All', 'Call', 'Text', 'Video'];

export default function ClientTimeline() {
  const { getFilteredInteractions } = useGlobalInteractions();
  const [selectedFilter, setSelectedFilter] = useState('All');

  const displayedInteractions = getFilteredInteractions(selectedFilter);

  const getIcon = (type) => {
    switch (type) {
      case 'Call': return <FaPhoneAlt className="text-[#ef4444]" />;
      case 'Text': return <FaCommentDots className="text-[#3b82f6]" />;
      case 'Video': return <FaVideo className="text-[#8b5cf6]" />;
      default: return null;
    }
  };

  return (
    <main className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Timeline</h1>
      
      

      <div className="space-y-3">
        {displayedInteractions.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 text-center">
            <p className="text-gray-500 text-md">
              No interactions yet.<br />
              Start by checking in with your friends from their detail page.
            </p>
          </div>
        ) : (
          displayedInteractions.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-5 hover:shadow-sm transition-all"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                {getIcon(item.type)}
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[#244d3f] text-[17px]">{item.title}</p>
              </div>

              <div className="text-right text-sm text-gray-500 whitespace-nowrap">
                {item.date}
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}