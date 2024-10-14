import React from "react";
import Details from "@/components/Details";
import CodeybotArticle from "@/data/clubs/CodeybotArticle";
import TermSyscomArticle from "@/data/clubs/TermSyscomArticle";

const Clubs = () => {
    return (
        <section className="w-[85%] mx-auto text-slate-50 pt-8 pb-16">
            <p className="pr-8 text-lg leading-8 font-normal text-gray-800">
                You might be wondering.
                <br />
                <br />

                So what exactly do I do in the Computer Science Club?
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
        </section>
    )
};

export default Clubs;