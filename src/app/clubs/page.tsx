import React from "react";
import Details from "@/components/Details";
import CodeybotArticle from "@/data/clubs/CodeybotArticle";
import TermSyscomArticle from "@/data/clubs/TermSyscomArticle";
import MathsocWebManagerArticle from "@/data/clubs/MathsocWebManagerArticle";
import MathsocWebDevArticle from "@/data/clubs/MathsocWebDevArticle";

const Clubs = () => {
    return (
        <section className="w-[85%] mx-auto text-slate-50 pt-8 pb-16">
            <p className="pr-8 text-lg leading-8 font-normal text-gray-800">
                Having read my profile and experience, you might be tempted to ask some questions.
                <br />
                <br />

                "What do you do in the Computer Science Club? 
                How complicated is it? 
                How much do you need to commit to the club?"
                <br />
                <br />

                Well, let's find out, shall we?
            </p>

            <Details
                title="Lead CodeyBot Developer"
                content={<CodeybotArticle />}
            />

            <Details
                title="Terminal and System Committee"
                content={<TermSyscomArticle />}
            />

            <p className="pr-8 text-lg leading-8 font-normal text-gray-800">
                In a series of very unexpected events, it turned out that I am now also involved with
                MathSoc. While the following positions are listed as <strong>Volunteers</strong>, 
                I personally still feel like club work. Plus, MathSoc is sorta like a club anyways, 
                minus the board of directors and the council, so here we are.
            </p>

            <Details
                title="MathSoc Website Manager"
                content={<MathsocWebManagerArticle />}
            />

            <Details
                title="MathSoc Website Developer"
                content={<MathsocWebDevArticle />}
            />
        </section>
    )
};

export default Clubs;