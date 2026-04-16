import { friendsData } from "@/data/friendsData";
import { notFound } from "next/navigation";
import Image from "next/image";
import DetailClientActions from "@/components/friend-ui/DetailClientActions";
import { FaClock, FaArchive, FaTrashAlt } from "react-icons/fa";

export default async function FriendDetailPage({ params }) {
  const { id } = await params;
  const friendId = parseInt(id);

  const friend = friendsData.find((f) => f.id === friendId);

  if (!friend) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto p-6 bg-[#f8fafc] mb-15">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-gray-100">
          <div className="flex flex-col items-center text-center">
            <Image
              src={friend.picture}
              alt={friend.name}
              width={128}
              height={128}
              className="rounded-full object-cover border-4 border-white shadow-sm"
            />

            <h1 className="text-3xl font-bold text-gray-900 mt-6">{friend.name}</h1>
            <div className={`mt-4 px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider
              ${friend.status === "overdue" 
                ? "bg-[#ef4444] text-white" 
                : friend.status === "almost due" 
                ? "bg-[#efad44] text-white" 
                : "bg-[#244d3f] text-white"}`}>
              {friend.status.toUpperCase().replace("-", " ")}
            </div>
            <div className="flex gap-2 mt-5 flex-wrap justify-center">
              {friend.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-50 text-green-600 text-xs font-bold px-3 py-1 rounded uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-3 text-gray-600 leading-relaxed text-[15px] px-4">
              {friend.bio}
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed text-[15px] px-4">
              {friend.email}
            </p>
          </div>
          <div className="mt-10 space-y-3">
            <button className="w-full flex items-center justify-center gap-3 py-3.5 border border-gray-200 rounded-2xl hover:bg-gray-50 text-gray-700 font-medium">
              <FaClock className="text-gray-500" /> Snooze 2 Weeks
            </button>

            <button className="w-full flex items-center justify-center gap-3 py-3.5 border border-gray-200 rounded-2xl hover:bg-gray-50 text-gray-700 font-medium">
              <FaArchive className="text-gray-500" /> Archive
            </button>

            <button className="w-full flex items-center justify-center gap-3 py-3.5 border border-red-200 text-red-600 rounded-2xl hover:bg-red-50 font-medium">
              <FaTrashAlt /> Delete
            </button>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
              <p className="text-4xl font-bold text-[#244d3f]">{friend.days_since_contact}</p>
              <p className="text-sm text-gray-500 mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
              <p className="text-4xl font-bold text-[#244d3f]">{friend.goal}</p>
              <p className="text-sm text-gray-500 mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
              <p className="text-2xl font-bold text-[#244d3f]">{friend.next_due_date}</p>
              <p className="text-sm text-gray-500 mt-1">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg text-[#244d3f]">Relationship Goal</h3>
              <p className="text-gray-500 mt-1 font-normal">
                Connect every <span className="font-bold">{friend.goal} days</span>
              </p>
            </div>
            <button className="px-5 py-2 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50">
              Edit
            </button>
          </div>

          <DetailClientActions name={friend.name} />
        </div>
      </div>
    </main>
  );
}