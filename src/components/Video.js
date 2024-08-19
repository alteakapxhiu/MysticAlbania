import React, { useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

const YouTubeVideo = () => {
  const [videoSrc, setVideoSrc] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the observer only once
    threshold: 0.5, // Percentage of the element visible to trigger the observer
  });

  const handleInView = useCallback(() => {
    if (inView && !videoSrc) {
      setVideoSrc('https://www.youtube.com/embed/qN1-vH_h87I?autoplay=1&mute=1');
    }
  }, [inView, videoSrc]);

  React.useEffect(() => {
    handleInView();
  }, [handleInView]);

  return (
    <div className="responsive-iframe-container" ref={ref}>
      {videoSrc && (
        <iframe
          src={videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player"
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeVideo;
