import { Suspense } from "react";
import Banner from "@/components/homepage/Banner";
import FriendsList from "@/components/homepage/FriendsList";
import { friendsData } from "@/data/friendsData";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Banner />
      
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-slate-900">Your Friends</h2>
        <Suspense fallback={
           <div className="flex justify-center py-20">
             <span className="loading loading-spinner loading-lg text-success"></span>
           </div>
        }>
          <FriendsList data={friendsData} />
        </Suspense>
      </section>
    </main>
  );
}