import FriendsCard from "./FriendsCard";

export default async function FriendsList({ data }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((friend) => (
        <FriendsCard key={friend.id} friend={friend} />
      ))}
    </div>
  );
}