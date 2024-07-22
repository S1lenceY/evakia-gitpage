import React, { useState } from 'react';

const ImageWithLoader = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="flex flex-col bg-mainSection h-full object-cover p-4">
          <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${loaded ? 'block' : 'hidden'}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default ImageWithLoader;
