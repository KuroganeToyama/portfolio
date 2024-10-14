interface ProjectLink {
    name: string;
    path: string;
}
  
interface Project {
    name: string;
    links: ProjectLink[];
    src: string;
    skills: string[];
    desc: string;
}
  
export const projects: Project[] = [
    {
        name: "Otaku Music Bot",
        links: [
            { name: "GitHub", path: "https://github.com/KuroganeToyama/otaku-music" },
        ],
        src: "/projects/otakumusic.jpg",
        skills: ["JavaScript", "Discord.js", "Docker"],
        desc: "A Discord music bot for me and my friends. \
        Creating a music bot diverges from the normal framework a little bit, \
        so it was nice to learn something new within the same tech stack. \
        There were also challenges to setting up the Docker container properly, which you could get a glimpse from \
        the README.md file in the repo. Nonetheless, good to learn something new. \
        Now we get to easily share music within the server without having to stream anything! Hooray!",
    },

    {
        name: "Pixiv API",
        links: [
            { name: "GitHub", path: "https://github.com/KuroganeToyama/pixiv-api" },
        ],
        src: "/projects/pixiv.jpg",
        skills: ["Python", "Flask"],
        desc: "An unoffical API for retrieving images from Pixiv. The API is based on the work of Pixiv Crawler, \
        which you can explore here: https://github.com/CWHer/PixivCrawler. I created this API just because I wanted \
        more quality images for my Discord bot to fetch. Did learn some interesting stuff about creating, testing and hosting APIs though. \
        また、Pixivの開発者の皆さん、APIへのアクセスを許可してください。本当に感謝します。\
        あなた方はモバイルアプリを持っているので、APIを持っていることは知っています。",
    },

    {
        name: "Portfolio",
        links: [
            { name: "GitHub", path: "https://github.com/KuroganeToyama/portfolio" },
        ],
        src: "/projects/portfolio.png",
        skills: ["TypeScript", "React", "Next.js", "Tailwind"],
        desc: "My personal portfolio to showcase myself a bit more. Hey, you're viewing this project in action!",
    },
    
    {
        name: "Otaku Bot",
        links: [
            { name: "GitHub", path: "https://github.com/KuroganeToyama/otakubot" },
        ],
        src: "/projects/otakubot.jpg",
        skills: ["JavaScript", "Discord.js", "Docker"],
        desc: "A Discord bot for me and my friends. \
        It allows us to grab stuff of our interests (we got a lot of interests) from the intenet. \
        It's also a successful attempt to self-host an application.",
    },

    {
        name: "CodeyBot",
        links: [
            { name: "GitHub", path: "https://github.com/uwcsc/codeybot" },
        ],
        src: "/projects/codeybot.png",
        skills: ["TypeScript", "Discord.js", "SQLite", "Docker"],
        desc: "The Discord bot of the Computer Science Club. \
        It can perform a multitude of tasks from academics, internships to social activities.",
    },

    {
        name: "Watopoly",
        links: [
            { name: "GitHub", path: "https://github.com/KuroganeToyama/cs246-watopoly" },
        ],
        src: "/projects/watopoly.png",
        skills: ["C++"],
        desc: "My final project for CS246, Object-Oriented Software Development. \
        It's also the UWaterloo verison of Monopoly. \
        More importantly, this is where we were tested on our applications of design patterns. \
        By university policy, I have to make this repo private. \
        So email me if you do wanna see what me and my teammates did. \
        However, if you're a UW student who has yet to complete CS246, then don't.",
    },

    {
        name: "Racket Parser",
        links: [
            { name: "GitHub", path: "https://github.com/KuroganeToyama/racket-parser" },
        ],
        src: "/projects/racket.png",
        skills: ["Python"],
        desc: "A tool I developed during my time as a full-time ISA, \
        to assist with the limitations of the marking engine. \
        Thank goodness the Racket language is simple to parse.",
    },

    {
        name: "Batch Checker",
        links: [
            { name: "GitHub", path: "https://github.com/KuroganeToyama/batch-checker" },
        ],
        src: "/projects/racket.png",
        skills: ["Python"],
        desc: "A tool I developed during my time as a full-time ISA, \
        to temporarily deal with a bug within the marking engine. \
        Luckily, we managed to resolve the bug afterwards.",
    },
];