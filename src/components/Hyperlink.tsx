import React from "react";

interface HyperlinkProps {
    link: string;
    text: string;
}

const Hyperlink = ({ link, text }: HyperlinkProps) => {
    return (
        <a href={link} target="_blank"
        className="relative inline-block text-blue-500 after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            {text}
        </a>
    )
};

export default Hyperlink;