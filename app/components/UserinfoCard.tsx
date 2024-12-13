import Link from "next/link";
import Image from "next/image";

export default function UserinfoCard({ userId }: { userId: string }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
            <span className="text-xl text-black">Floyd Mayweather</span>
            <span className="text-sm">Paul</span>
        </div>
        <p>The lorem tag inserts a specified amount of random text. The "random" text is the famous "Lorum ipsum" text, in lower case letters</p>
        <div className="flex items-center gap-2">
            <Image src="/map.png" alt="" width={16} height={16}/>
            <span>Living In <b>London , UK </b></span>
        </div>
        <div className="flex items-center gap-2">
            <Image src="/school.png" alt="" width={16} height={16}/>
            <span>Went to Kendriya Vidyalaya,London</span>
        </div>
        <div className="flex items-center gap-2">
            <Image src="/work.png" alt="" width={16} height={16}/>
            <span>Work's at <b>Meta Inc.</b></span>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex gap-1 items-center">
                <Image src="/link.png" alt="" width={16} height={16}/>
                <Link href="/" className="text-blue-500 font-medium">lama.dev</Link>
            </div>
            <div className="flex gap-1 items-center">
                <Image src="/date.png" width={16} height={16} />
                <span>Joined 23 Dec 2024</span>
            </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">Follow</button>
        <span className="text-red-400 self-end text-xs cursor-pointer">Block User</span>
        </div>
      </div>
      
  );
}
