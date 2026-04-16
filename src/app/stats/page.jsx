// src/app/stats/page.jsx   ← Server Component
import ClientStats from './client-page';

export const metadata = {
  title: "KeenKeeper || Stats",
  description: "Friendship Analytics - Keep Your Friendships Alive",
};

export default function StatsPage() {
  return <ClientStats />;
}