import React from 'react';
import { useParams } from 'react-router-dom';
import mockVideos, { Video } from '@/data/mockVideos';
import VideoCard from '@/components/VideoCard';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp, ThumbsDown, Share2, Save, MoreHorizontal } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const VideoPlayerPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const video = mockVideos.find(v => v.id === id);

  if (!video) {
    return <div className="p-4">Video not found.</div>;
  }

  const suggestedVideos = mockVideos.filter(v => v.id !== id && v.category === video.category).slice(0, 5);

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 md:p-6 lg:p-8">
      <div className="flex-1">
        {/* Video Player */}
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-4">
          <iframe
            src={video.videoUrl}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>

        {/* Video Details */}
        <h1 className="text-xl md:text-2xl font-bold mb-2">{video.title}</h1>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={video.channelAvatarUrl} alt={video.channelName} />
              <AvatarFallback>{video.channelName.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">{video.channelName}</h2>
              <p className="text-sm text-muted-foreground">1.5M subscribers</p> { /* Mock subscriber count */}
            </div>
            <Button className="rounded-full px-4 py-2 ml-4">Subscribe</Button>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" className="rounded-full flex items-center gap-1">
              <ThumbsUp className="h-5 w-5" /> <span>1.2K</span>
            </Button>
            <Button variant="ghost" className="rounded-full flex items-center gap-1">
              <ThumbsDown className="h-5 w-5" /> <span>20</span>
            </Button>
            <Button variant="ghost" className="rounded-full flex items-center gap-1">
              <Share2 className="h-5 w-5" /> <span>Share</span>
            </Button>
            <Button variant="ghost" className="rounded-full flex items-center gap-1">
              <Save className="h-5 w-5" /> <span>Save</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Video Description */}
        <div className="bg-muted p-4 rounded-lg text-sm">
          <p className="font-semibold mb-1">
            {video.views} • {video.uploadDate}
          </p>
          <p>{video.description}</p>
          {/* Add more description content or truncate logic */}
        </div>

        {/* Comments Section (Placeholder) */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Comments</h3>
          <p className="text-muted-foreground">Comments section coming soon...</p>
        </div>
      </div>

      {/* Suggested Videos */}
      <div className="w-full lg:w-80 flex-shrink-0">
        <h3 className="text-xl font-semibold mb-4">Suggested Videos</h3>
        <div className="space-y-4">
          {suggestedVideos.map(suggestedVideo => (
            <VideoCard key={suggestedVideo.id} video={suggestedVideo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
