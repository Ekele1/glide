// components/VideoPlayer.tsx
import React from 'react';

const VideoPlayer = ({ src, className = '' }: { src: string; className?: string }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <video
        className="w-full h-auto"
        controls
        autoPlay
        muted
        loop
        playsInline // Important for iOS
      >
        <source src={src} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export default VideoPlayer;