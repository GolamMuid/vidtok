import VideoThumbnail from "@/components/VideoThumbnail";

export default function Home() {
  return (
    <div className="py-8 container mx-auto">
      <div className="flex flex-4 gap-8">
        <VideoThumbnail />
        <VideoThumbnail />
        <VideoThumbnail />
        <VideoThumbnail />
      </div>
    </div>
  );
}
