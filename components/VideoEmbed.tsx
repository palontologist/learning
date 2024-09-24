// components/VideoEmbed.tsx
import React from 'react';

interface VideoEmbedProps {
  url: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ url }) => {
  return (
    <div className="relative w-full h-0 pb-9/16">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={url}
        frameBorder="0"
        allowFullScreen
        title="Video"
      />
    </div>
  );
};

export default VideoEmbed;