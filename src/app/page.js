// src/app/page.js
import Banner from "@/components/homepage/Banner";
import FriendsCard from "@/components/homepage/FriendsCard";
import friendsData from "@/data/friendsData"; // আপনার ডাটা ফাইলটি যেখানে রেখেছেন

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Banner />
      
      
      {/* <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-slate-900">Your Friends</h2>
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friendsData.map((friend) => (
            <FriendsCard key={friend.id} friend={friend} />
          ))}
        </div>
      </section> */}
    </main>
  );
}