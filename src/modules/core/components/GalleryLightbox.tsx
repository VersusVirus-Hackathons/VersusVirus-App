import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import { useStoreState, useStoreActions } from "../../../model";

export interface GalleryLightboxProps {
  style?: {};
  className?: string;
  openingPhotoIndex: number;
  images: Array<string>;
}

const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  style,
  className,
  images,
}) => {
  const isLightboxOpen = useStoreState(
    (s) => s.submittedProject.isLightboxOpen,
  );
  const setIsLightboxOpen = useStoreActions(
    (s) => s.submittedProject.setIsLightboxOpen,
  );
  const photoIndex = useStoreState((s) => s.submittedProject.photoIndex);
  const setPhotoIndex = useStoreActions(
    (s) => s.submittedProject.setPhotoIndex,
  );
  return (
    <div>
      {isLightboxOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsLightboxOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default GalleryLightbox;
