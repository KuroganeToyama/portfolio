import React from "react";
import Hyperlink from "@/components/Hyperlink";

const MathsocWebManagerArticle = () => {
    return (
        <div>
            <p className="pr-8 text-lg leading-8 font-normal text-gray-800">
                MathSoc (short for Mathematics Society) is an organization run by
                the Faculty of Math. They host events for students in the Faculty of Math,
                and more importantly, manages clubs registered under the Faculty of Math.
                <br />
                <br />

                As per standard, MathSoc has their own website, which you can explore
                {" "}
                <Hyperlink
                    link="https://mathsoc.uwaterloo.ca/"
                    text="here"
                />
                {" "}.
                MathSoc always has new information to update on the website, whether it's events, board meetings,
                council meetings, or changes to request forms. As a result, website managers are responsible
                for making updates to the website. And hey, I'm a website manager!
                <br />
                <br />

                You might think there would be many technical things to understand when working with a website.
                That's true, around 50% of the time. Not everyone builds their websites from scratch (I do btw, you're looking at it).
                MathSoc is among the other half of the crowd. More specifically, the MathSoc website is built
                using WordPress, a very popular choice for content management systems. Even more specifically, we use Avada Builer
                as the main (and sole) plugin to build the website, and we use custom HTML/CSS every now and then
                if Avada proves to be too much of a pain for customization.
                <br />
                <br />

                So I suppose I can tell you with confidence that I know my way around WordPress.
                Not entirely useful of a skill, given that my path is currently website and software development.
                But sometimes, content management system could be a better choice, and should that be the case,
                I have the skills to take on the work.
                <br />
                <br />

                And this is where you realize there's another website position that I also occupy.
            </p>
        </div>
    )
};

export default MathsocWebManagerArticle;