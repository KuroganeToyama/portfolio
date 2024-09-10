import React from "react";

interface ImgageWithCaptionProps {
    src: string;
    alt: string;
    styles: string;
    caption: string;
}

const ImgageWithCaption = ({ src, alt, styles, caption }: ImgageWithCaptionProps) => {
    return (
      <figure className="flex flex-col items-left w-full max-w-sm">
        <img src={src} alt={alt} className={styles} />
        <figcaption className="pr-8 text-base leading-8 font-normal text-gray-800">{caption}</figcaption>
      </figure>
    );
};

export default ImgageWithCaption;