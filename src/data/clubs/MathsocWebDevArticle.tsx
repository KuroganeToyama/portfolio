import React from "react";
import Hyperlink from "@/components/Hyperlink";

const MathsocWebDevArticle = () => {
    return (
        <div>
            <p className="pr-8 text-lg leading-8 font-normal text-gray-800">
                Yes, we have to admit that WordPress is not the best way to manage a website.
                So, there's a project that has been ongoing for three years, where we're trying to
                migrate the contents and functionalities of the current MathSoc website to a
                front-end and back-end framework. The goal is to make it easier to maintain the website.
                That's where the website developers come in.
                <br />
                <br />

                So, a couple of words about our project. We use Pug.js, a simple and straightforward
                framework, for front-end development. Then we use Express.js to configure our back-end features.
                Currently, we are still working on the migration.
                We have migrated most of the stuff, save for some 30-ish issues that we need to work on, mostly
                about the back-end features. You can view our 
                {" "}
                <Hyperlink
                    link="https://github.com/MathSoc/mathsoc-website"
                    text="GitHub repo"
                />
                {" "} 
                for our project, but you can only make contributions
                if you're a current University of Waterloo student.
                <br />
                <br />
                
                That being said, I do want to point out one thing. There's a reason why we went with WordPress in the first place.
                It's also why many people went with content management systems (CMS) instead of building their websites from scratch.
                You barely need any website development knowledge to manage a website with CMS.
                As a result, a major part of this project is to also develop our own CMS, so that website managers
                could easily update the website whenever necessary. I just happen to be a website manager who knows
                way too much about website development. For the most part, website managers aren't required to know
                extensively about web dev.
                <br />
                <br />

                By the way, if you got interested in these MathSoc positions after reading my articles,
                well guess what. You can apply to be one of us too!
                {" "}
                <Hyperlink
                    link="https://mathsoc.uwaterloo.ca/volunteer-at-mathsoc/"
                    text="Apply here"
                />
                {" "}
                if you wanna do what I do!
                <br />
                <br />

                P/S: The positions are not always open, so either join the 
                {" "}
                <Hyperlink
                    link="https://mathsoc.uwaterloo.ca/how-to-access-the-mathsoc-discord/"
                    text="MathSoc Discord server"
                />
                {" "}
                for announcements,
                or just look out for them very carefully.
                <br />
                <br />

                P/S: I'm not advertising for these MathSoc positions, that's the job of the marketing people. 
                Just felt like I should provide more details.
            </p>
        </div>
    )
};

export default MathsocWebDevArticle;