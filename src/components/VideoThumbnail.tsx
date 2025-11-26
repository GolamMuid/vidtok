import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

const VideoThumbnail = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      {/* <Image src={""} height={128} width={128} alt="" /> */}
      <Skeleton className="h-[200px] w-full rounded-4xl" />
      <div className="text-2xl font-bold">Title</div>
      <div className="text-gray-400"> Date Posted</div>
    </div>
  );
};

export default VideoThumbnail;
