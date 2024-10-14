import React from "react";
import Hyperlink from "@/components/Hyperlink";

const CodeybotArticle = () => {
    return (
        <div>
            <p className="pr-8 text-lg leading-8 font-normal text-gray-800">
                CodeyBot is the Discord bot of the Computer Science Club.
                It does a lot of things within the Discord server, 
                allowing members to retrieve information of their interests and 
                interact with other members in various different manners.
                If you want to learn more details on what the bot can do,
                our
                {" "}
                <Hyperlink
                    link="https://github.com/uwcsc/codeybot/blob/main/docs/COMMAND-WIKI.md"
                    text="live command documentation"
                />
                {" "} 
                is where you can go to.
                <br />
                <br />

                I have been with the team since December 2023. 
                My general workflow is pretty simple and straigtfroward.
                We maintain a GitHub Project Board that contains a lot of tickets.
                I pick a ticket of my own interest and work on that ticket at my own pace.
                Once I believe I have gotten the ticket down, I submit a pull request, 
                ask for feedback from the lead developers, incorporate the feedbacks if any, 
                and finally merge my work into the main branch once I receive approval.
                <br />
                <br />

                A couple of things I worked on are:
            </p>

            <ul className="text-gray-800 mb-8 ml-4 list-disc">
                <li>Enhanced a command for resume critique</li>
                <li>Migrated a couple of commands to the new framework for better modularization and support</li>
                <li>Developed a live command documentation that automatically updates whenever a command is created or updated</li>
                <li>Integrated UWFlow GraphQL API to provide course information to server members</li>
            </ul>
                
            <p className="pr-8 text-lg leading-8 font-normal text-gray-800">
                Around June 2024, I got promoted to lead developer.
                Along with another lead developer, we oversee the team's progress 
                and perform quality assurance on the development of other developers in the team.
                We are also in charge of overseeing the servers where we host the bot.
                We ensure the bot is running properly and troubleshoot any issue that arises.
                <br />
                <br />

                That's pretty much what I do in the CodeyBot team.
                <br />
                <br />

                But wait, there's more!
            </p>
        </div>
    )
};

export default CodeybotArticle;