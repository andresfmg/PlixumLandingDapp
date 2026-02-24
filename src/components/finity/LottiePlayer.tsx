import { useEffect, useRef } from 'react';

interface LottiePlayerProps {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  className?: string;
}

export const LottiePlayer = ({ 
  src, 
  loop = true, 
  autoplay = true, 
  speed = 1,
  className = '' 
}: LottiePlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load script if not already loaded
    const loadScript = () => {
      return new Promise((resolve) => {
        if ((window as any).dotlottiePlayerModule) {
          resolve(null);
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';
        script.type = 'module';
        script.async = true;
        script.onload = () => {
          (window as any).dotlottiePlayerModule = true;
          resolve(null);
        };
        script.onerror = () => {
          console.error('Failed to load dotlottie-player script');
          resolve(null);
        };
        document.head.appendChild(script);
      });
    };

    const createPlayer = async () => {
      if (!containerRef.current) return;

      await loadScript();

      // Small delay to ensure custom element is registered
      setTimeout(() => {
        if (!containerRef.current) return;

        // Clear previous content
        containerRef.current.innerHTML = '';

        // Create the player element
        const player = document.createElement('dotlottie-player');
        player.setAttribute('src', src);
        player.setAttribute('speed', speed.toString());
        player.setAttribute('mode', 'normal');
        player.setAttribute('style', 'width: 100%; height: 100%;');
        
        if (loop) player.setAttribute('loop', '');
        if (autoplay) player.setAttribute('autoplay', '');

        containerRef.current.appendChild(player);
      }, 100);
    };

    createPlayer();

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [src, loop, autoplay, speed]);

  return <div ref={containerRef} className={className} />;
};
