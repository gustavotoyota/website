"use client";

import { useEventListener } from "@/hooks/use-event";
import useStateWithRef from "@/hooks/use-state-with-ref";
import Image from "next/image";

export function Gallery(props: { images: { src: string; alt: string }[] }) {
  const [currentImageIdx, setCurrentImageIdx, currentImageIdxRef] =
    useStateWithRef<number | null>(() => null);

  const prevImageIdx =
    currentImageIdx != null
      ? (currentImageIdx + props.images.length - 1) % props.images.length
      : null;

  const nextImageIdx =
    currentImageIdx != null
      ? (currentImageIdx + 1) % props.images.length
      : null;

  useEventListener(
    () => window,
    "keydown",
    (event) => {
      if (currentImageIdxRef.current == null) {
        return;
      }

      if (event.key === "Escape") {
        setCurrentImageIdx(null);
      }

      if (event.key === "ArrowLeft") {
        setCurrentImageIdx(
          (oldCurrentImageIdx) =>
            ((oldCurrentImageIdx ?? 0) + props.images.length - 1) %
            props.images.length
        );
      }

      if (event.key === "ArrowRight") {
        setCurrentImageIdx(
          (oldCurrentImageIdx) =>
            ((oldCurrentImageIdx ?? 0) + 1) % props.images.length
        );
      }
    }
  );

  return (
    <>
      {/* Expanded */}

      {currentImageIdx != null ? (
        <div className="fixed inset-0 bg-black select-none flex flex-col">
          <div className="flex-1 relative">
            {/* Current image */}

            <Image
              key={currentImageIdx}
              src={props.images[currentImageIdx].src}
              alt={props.images[currentImageIdx].alt}
              title={props.images[currentImageIdx].alt}
              fill={true}
              className="bg-black object-contain"
              draggable={false}
            />

            {/* Next image */}

            {nextImageIdx != null ? (
              <Image
                key={nextImageIdx}
                src={props.images[nextImageIdx].src}
                alt={props.images[nextImageIdx].alt}
                fill={true}
                className="invisible"
              />
            ) : null}

            {/* Prev image */}

            {prevImageIdx != null ? (
              <Image
                key={prevImageIdx}
                src={props.images[prevImageIdx].src}
                alt={props.images[prevImageIdx].alt}
                fill={true}
                className="invisible"
              />
            ) : null}
          </div>

          {/* Caption */}

          {props.images[currentImageIdx].alt ? (
            <div className="text-center text-sm my-2">
              {props.images[currentImageIdx].alt}
            </div>
          ) : null}

          {/* Close button */}

          <div className="fixed top-6 right-6 w-10 h-10 rounded-full hover:bg-white/10 cursor-pointer flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white/90"
              onClick={() => setCurrentImageIdx(null)}
            >
              <use xlinkHref="/codicon.svg#close" />
            </svg>
          </div>

          {/* Prev button */}

          <div className="fixed top-1/2 left-6 w-14 h-14 -translate-y-1/2 rounded-full hover:bg-white/10 cursor-pointer flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white/90"
              onClick={() =>
                setCurrentImageIdx(
                  (oldCurrentImageIdx) =>
                    ((oldCurrentImageIdx ?? 0) + props.images.length - 1) %
                    props.images.length
                )
              }
            >
              <use xlinkHref="/codicon.svg#chevron-left" />
            </svg>
          </div>

          {/* Next button */}

          <div className="fixed top-1/2 right-6 w-14 h-14 -translate-y-1/2 rounded-full hover:bg-white/10 cursor-pointer flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white/90"
              onClick={() =>
                setCurrentImageIdx(
                  (oldCurrentImageIdx) =>
                    ((oldCurrentImageIdx ?? 0) + 1) % props.images.length
                )
              }
            >
              <use xlinkHref="/codicon.svg#chevron-right" />
            </svg>
          </div>
        </div>
      ) : null}

      <div className="flex flex-wrap">
        {props.images.map((image, index) => (
          <div
            key={index}
            className="m-2 flex flex-col cursor-pointer"
            style={{ maxWidth: "128px" }}
            onClick={() => setCurrentImageIdx(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              title={image.alt}
              width={128}
              height={128}
              className="bg-black object-contain"
              draggable={false}
            />

            <div className="mt-2 text-xs text-white/80">{image.alt}</div>
          </div>
        ))}
      </div>
    </>
  );
}
