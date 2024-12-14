import ProfileCard from "./ProfileCard";
import Link from "next/link";
import Ad from "./Ad";
import Image from "next/image";

export default function LeftMenu({ type }: { type: "home" | "profile" }) {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/posts.png" alt="" width={20} height={20} />
        </Link>
        <span>My Posts</span>
        <hr className="border-t-1 border-gray-50 w-36 sel" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/activity.png" alt="" width={20} height={20} />
        </Link>
        <span>Activity</span>
        <hr className="border-t-1 border-gray-50 w-36 sel" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/market.png" alt="" width={20} height={20} />
        </Link>
        <span>Marketplace</span>
        <hr className="border-t-1 border-gray-50 w-36 sel" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/events.png" alt="" width={20} height={20} />
        </Link>
        <span>Events</span>
        <hr className="border-t-1 border-gray-50 w-36 sel" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/albums.png" alt="" width={20} height={20} />
        </Link>
        <span>Albums</span>
        <hr className="border-t-1 border-gray-50 w-36 sel" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/videos.png" alt="" width={20} height={20} />
        </Link>
        <span>Videos</span>
        <hr className="border-t-1 border-gray-50 w-36 sel" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/news.png" alt="" width={20} height={20} />
        </Link>
        <span>News</span>
        <hr className="border-t-1 border-gray-50 w-36 sel" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/courses.png" alt="" width={20} height={20} />
        </Link>
        <span>Courses</span>
        <hr className="border-t-1 border-gray-50 w-36 sel" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/lists.png" alt="" width={20} height={20} />
        </Link>
        <span>Lists</span>
        <hr className="border-t-1 border-gray-50 w-36 sel" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/settings.png" alt="" width={20} height={20} />
        </Link>
        <span>Settings</span>
      </div>
      <Ad size="sm" />
    </div>
  );
}
