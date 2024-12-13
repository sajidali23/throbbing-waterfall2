import Image from "next/image";


export default function Ad({ size }: { size: "sm" | "md" | "lg" }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
    <div className="flex items-center justify-center text-gray-500 font-medium">
      <span>Sponsered Ads</span>
      <Image src="/more.png" alt="" width={16} height={16}/>
    </div>
    <div className={`flex flex-col mt-4 ${size == "sm" ? "gap-2" : "gap-4"}`}>
      <div className={`relative w-full ${size == "sm" ? "h-24" : size == "md" ? "h-36" : "h-48"}`}>
        <Image src="/image-1.jpeg" fill className="rounded-lg object-cover"/>
      </div>
      <div className="flex items-center gap-4">
      <Image src="/image-1.jpeg" width={24} height={24} className="rounded-full w-6 h-6 object-cover"/>
      <span className="text-blue-500 font-medium">BigChef Lounge</span>
      </div>
      <p className={size == "sm" ? "text-xs" : "text-sm"}>
        {size == "sm" ? " but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, ." : size == "md" ? " but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." : " but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
      </p>
      <button className="bg-gray-200 text-gray-500 p-2 text-sm rounded-lg">Learn More</button>
    </div>
    </div>
  );
}
