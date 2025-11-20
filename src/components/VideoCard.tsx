import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Video } from '@/data/mockVideos'; // Import the Video interface

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <Link to={`/watch/${video.id}`} className="block">
      <Card className="rounded-lg overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
        <img src={video.thumbnailUrl} alt={video.title} className="w-full h-48 object-cover" />
        <CardContent className="p-3">
          <div className="flex items-start space-x-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src={video.channelAvatarUrl} alt={video.channelName} />
              <AvatarFallback>{video.channelName.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="text-sm font-semibold line-clamp-2">{video.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{video.channelName}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{video.views} • {video.uploadDate}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VideoCard;
