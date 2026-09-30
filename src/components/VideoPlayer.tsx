import React, { useState } from 'react';
import { Play, Volume2, VolumeX, Maximize2, ExternalLink } from 'lucide-react';

interface VideoPlayerProps {
  vimeoId?: string;
  vimeoUrl?: string;
  posterImage: string;
  title: string;
  autoPlay?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  vimeoId,
  vimeoUrl,
  posterImage,
  title,
  autoPlay = false
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);

  // If Vimeo ID is provided, build an embed URL
  const embedUrl = vimeoId
    ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=${isMuted ? '1' : '0'}&color=ffffff&title=0&byline=0&portrait=0&dnt=1`
    : null;

  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden group select-none">
      {isPlaying && embedUrl ? (
        <div className="relative w-full h-full">
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          {/* Quick controls bar */}
          <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
            {vimeoUrl && (
              <a
                href={vimeoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/60 hover:bg-black text-white text-xs flex items-center gap-1 backdrop-blur-sm transition-colors"
                title="Open in Vimeo"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Vimeo</span>
              </a>
            )}
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
          <img
            src={posterImage}
            alt={title}
            className="w-full h-full object-cover brightness-85 group-hover:brightness-95 transition-all duration-500"
            referrerPolicy="no-referrer"
          />

          {/* Central Play Button */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/60 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:scale-105 group-hover:border-white group-hover:bg-white group-hover:text-black">
              <Play className="w-6 h-6 md:w-8 md:h-8 fill-current translate-x-0.5" />
            </div>
          </div>

          {/* Bottom Title Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between">
            <div>
              <span className="block text-[11px] uppercase tracking-widest text-white/60">
                Play Film
              </span>
              <span className="font-display text-sm md:text-base font-semibold text-white">
                {title}
              </span>
            </div>
            <span className="text-xs uppercase tracking-widest text-white/60 border border-white/20 px-2.5 py-1">
              HD 1080p
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
