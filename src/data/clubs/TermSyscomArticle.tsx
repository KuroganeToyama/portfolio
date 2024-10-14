import React from "react";

const TermSyscomArticle = () => {
    return (
        <div>
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

            <ul className="text-gray-800 mb-8 ml-4 list-disc">
                <li>Overseeing softwares and platforms used internally in the team</li>
                <li>Migrating cloud hosting service from Apache CloudStack to OpenNebula </li>
            </ul>

            <p className="pr-8 text-lg leading-8 font-normal text-gray-800">
                And that's it for the Terminal and System Committee!
            </p>
        </div>
    )
};

export default TermSyscomArticle;