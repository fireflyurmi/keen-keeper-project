"use client";
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineTextsms } from 'react-icons/md';
import { PiVideoCameraBold } from 'react-icons/pi';
import { useGlobalInteractions } from '@/lib/context/InteractionContext';   

export default function DetailClientActions({ name }) {
  const [interactions, setInteractions] = useState([]);
  const { addGlobalInteraction } = useGlobalInteractions();   

  const handleAction = (type) => {
    const newEntry = {
      id: Date.now(),
      type: type,
      title: `${type} with ${name}`,
      description: type === "Call" 
        ? "Quick check-in call" 
        : type === "Text" 
        ? "Sent a message" 
        : "Video check-in",
      date: new Intl.DateTimeFormat('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      }).format(new Date())
    };

    setInteractions(prev => [newEntry, ...prev]);
    addGlobalInteraction(type, name);     

    toast.success(`${type} with ${name} added!`);
  };

  const getInteractionIcon = (type) => {
    switch (type) {
      case "Call": return <BiPhoneCall className="text-[#244d3f]" />;
      case "Text": return <MdOutlineTextsms className="text-[#244d3f]" />;
      case "Video": return <PiVideoCameraBold className="text-[#244d3f]" />;
      default: return "•";
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100">
      <h3 className="font-bold text-lg mb-6 text-[#244d3f]">Quick Check-In</h3>

      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => handleAction("Call")}
          className="flex flex-col items-center gap-3 py-5 border border-gray-200 rounded-2xl hover:bg-gray-50 transition"
        >
          <BiPhoneCall className="text-3xl text-[#244d3f]" />
          <span className="text-sm font-medium text-gray-700">Call</span>
        </button>

        <button
          onClick={() => handleAction("Text")}
          className="flex flex-col items-center gap-3 py-5 border border-gray-200 rounded-2xl hover:bg-gray-50 transition"
        >
          <MdOutlineTextsms className="text-3xl text-[#244d3f]" />
          <span className="text-sm font-medium text-gray-700">Text</span>
        </button>

        <button
          onClick={() => handleAction("Video")}
          className="flex flex-col items-center gap-3 py-5 border border-gray-200 rounded-2xl hover:bg-gray-50 transition"
        >
          <PiVideoCameraBold className="text-3xl text-[#244d3f]" />
          <span className="text-sm font-medium text-gray-700">Video</span>
        </button>
      </div>

      {interactions.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-bold text-lg text-[#244d3f]">Recent Interactions</h3>
            <span className="text-xs text-gray-500">Latest first</span>
          </div>

          <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
            {interactions.map((item) => (
              <div key={item.id} className="flex items-start gap-4 py-3 border-b border-gray-100 last:border-b-0">
                <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                  {getInteractionIcon(item.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900">{item.type}</p>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
                <p className="text-xs text-gray-400 whitespace-nowrap pt-1">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}