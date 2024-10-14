import React from "react";

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

            <details className="mt-16 mb-8">
                <summary className="text-2xl md:text-3xl lg:text-[40px] font-bold text-green-500 mt-16 mb-8">
                    Lead CodeyBot Developer
                </summary>
                <p className="pr-8 text-lg leading-8 font-normal text-gray-800">
                    CodeyBot is the Discord bot of the Computer Science Club.
                    It does a lot of things within the Discord server, 
                    allowing members to retrieve information of their interests and 
                    interact with other members in various different manners.
                    If you want to learn more details on what the bot can do,
                    our
                    {" "}
                    <a href="https://github.com/uwcsc/codeybot/blob/main/docs/COMMAND-WIKI.md" 
                    className="relative inline-block text-blue-500 after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                        live command documentation
                    </a>
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

                <ul className="text-gray-800 mb-8 list-disc pl-10 space-y-2">
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
            </details>

            <details className="mt-16 mb-8">
                <summary className="text-2xl md:text-3xl lg:text-[40px] font-bold text-green-500 mt-16 mb-8">
                    Terminal and System Committee
                </summary>
                <p className="pr-8 text-lg leading-8 font-normal text-gray-800">
                    I ain't no executive in this team, but I'm still a member developer.
                    Fun fact, I joined the team since December 2023, the same day I joined the CodeyBot team.
                    <br />
                    <br />

                    The Computer Science Club owns a lot of server machines. 
                    They're not the best (limited budget moment) but they're still quite decent.
                    Anyways, as long as you have club membership (which is $2 every 4 months, super cheap), 
                    you can do whatever you want with the servers (except doing crypto and other admin stuff).
                    The club provides these services to practically anyone, from individuals to clubs and organizations.
                    Long story short, there needs to be a team to manage all of this work.
                    That's where the Terminal and System Committee comes in.
                    <br />
                    <br />

                    Within the team, we use 
                    {" "}
                    <a href="https://plane.so/" 
                    className="relative inline-block text-blue-500 after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                        Plane
                    </a>
                    {" "} 
                    as our project management platform, which we also self-host.
                    Plane contains a lot of tickets from different areas, such as infrastructure, softwares, hardwares, mirrors, etc.
                    I just pick a ticket that I'm interested in and work on it at my own pace.
                    <br />
                    <br />

                    Currently, here are the two main tasks I'm actively invovled in.
                </p>

                <ul className="text-gray-800 mb-8 list-disc pl-10 space-y-2">
                    <li>Overseeing softwares and platforms used internally in the team</li>
                    <li>Migrating cloud hosting service from Apache CloudStack to OpenNebula </li>
                </ul>

                <p className="pr-8 text-lg leading-8 font-normal text-gray-800">
                    And that's it for the Terminal and System Committee!
                </p>
            </details>
        </section>
    )
};

export default Clubs;