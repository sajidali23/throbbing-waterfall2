import Ad from "./Ad";
import Birthday from "./Birthday";
import FriendRequest from "./FriendRequests";
import UserMediaCard from "./UserMediaCard";
import UserinfoCard from "./UserinfoCard";

export default function RightMenu({ userId }: { userId?: string }) {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserinfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FriendRequest />
      <Birthday />
      <Ad size="md" />
    </div>
  );
}
