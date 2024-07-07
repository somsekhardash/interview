/* eslint-disable react/prop-types */
import { Blurhash } from "react-blurhash";
import { useState } from "react";

export default function LazyLoadImage({ src, hash }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const loadImage = () =>{
    setTimeout(() => {
      setIsImageLoaded(true)
    }, 500)
  }

  return (
    <>
      <img
        style={{display: `${isImageLoaded? 'hidden': ''}`}}
        src={src}
        onLoad={loadImage}
        loading="lazy"
        width={400}
        height={300}
      />

      {!isImageLoaded && (
        <Blurhash
          hash={hash}
          width={400}
          height={300}
          punch={1}
        />
      )}
    </>
  );
}
