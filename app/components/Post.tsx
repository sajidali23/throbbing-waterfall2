import Comments from "./Comments";
import Image from "next/image";

export default function Post() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/pixel1.jpeg"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Sajid Ali</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="/pixel1.jpeg"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          bqwie qweg fqw euqw wq qwiehfqwdc hviuqw vuqey rveve vie rvq hiv q
          viqe i qervuqervqebrvuyegv e veirve e ig eg ei yiwehgiwergwie rgiery
          gwer hgiebv ig e owevhwbeviwerhwerviwe rgeg weirygwe{" "}
        </p>
      </div>
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex item-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              500<span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex item-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              500<span className="hidden md:inline"> Comment's</span>
            </span>
          </div>
        </div>
        <div>
          <div className="flex item-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/share.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              500<span className="hidden md:inline"> Share's</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
}
