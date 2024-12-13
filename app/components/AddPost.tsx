import Image from "next/image";

export default function AddPost() {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src="/image-1.jpeg"
        width={48}
        height={48}
        alt=""
        className="w-12 h-12 object-cover rounded-full"
      />
      <div className="flex-1">
        <div className="flex gap-4">
          <textarea placeholder="What's on your mind?" className="flex-1 bg-slate-100 rounded-lg p-2"></textarea>
          <Image
            src="/emoji.png"
            width={20}
            height={20}
            alt=""
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
        <Image
            src="/addimage.png"
            width={20}
            height={20}
            alt=""
            />
            Photo's
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
        <Image
            src="/addVideo.png"
            width={20}
            height={20}
            alt=""
            />
            Video's
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
        <Image
            src="/addevent.png"
            width={20}
            height={20}
            alt=""
            />
            Event's
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
        <Image
            src="/poll.png"
            width={20}
            height={20}
            alt=""
            />
            Poll's
            </div>
        </div>
      </div>
    </div>
  );
}
