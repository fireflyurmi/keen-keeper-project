import { Suspense } from "react";
import Banner from "@/components/homepage/Banner";
import FriendsList from "@/components/homepage/FriendsList";
import Loader from "@/components/homepage/Loader"; 
import { friendsData } from "@/data/friendsData";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Banner />
      
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-slate-900">Your Friends</h2>

        <Suspense fallback={<Loader />}>
          <FriendsList data={friendsData} />
        </Suspense>

      </section>
    </main>
  );
}