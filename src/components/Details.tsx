import React from "react";

interface DetailsProps {
    title: string;
    content: React.ReactNode;
}

const Details = ({ title, content }: DetailsProps) => {
    return (
        <details className="group mt-16 mb-8 border-transparent">
            <summary className="p-4 cursor-pointer text-2xl md:text-3xl lg:text-[40px] font-bold text-green-500 w-full transition-all duration-300 
            group-hover:border group-hover:rounded-lg group-hover:shadow-xl group-hover:bg-green-100
            group-open:border group-open:rounded-lg group-open:shadow-xl group-open:bg-green-100">
                {title}
            </summary>

            <div className="p-10 mt-4 border-t border-gray-300 transition-all duration-300 
            group-open:border group-open:rounded-lg group-open:shadow-xl group-open:bg-green-100 group-open:bg-opacity-50">
                {content}
            </div>
        </details>
    )
};

export default Details;