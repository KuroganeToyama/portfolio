import React from "react";
import ImgageWithCaption from "@/components/ImageWithCaption";

const Volunteers = () => {
    return (
        <section className="w-[85%] mx-auto text-slate-50 pt-8 pb-16">
            <p className="pr-8 text-lg leading-8 font-normal text-gray-800">
                What do you know? I also do volunteer work!
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-green-500 mt-16 mb-8">
                Waterloo Math Orientation 2024 - Pink Tie Leader
            </h1>

            <p className="pr-8 text-lg leading-8 font-normal text-gray-800">
                Every year, during the week right before the first week of class in September,
                the Faculty of Math of the University of Waterloo runs the Waterloo Math Orientation.
                It's a week-long event for first-year students to get to know the university and make some new friends along the way.
                <br />
                <br />

                The staff behind the orientation is quite large, so I'm gonna make this simple.
                There are roughly 1200 first-year students attending the orientation, so we split them up into 12 groups.
                Since each group still has roughly 100 students, for each group, we have roughly 10 leaders to manage and guide the student group.
                Within the 10 leaders, 2 of them are designated Head Pink Tie, and the remaining 8 are designated Pink Tie.
                Head Pink Ties are those with prior experience to ensure things will go as smoothly as possible.
                I did this for the first time so I got to be a Pink Tie.
                <br />
                <br />

                Every year, we come up with a theme for the orientation, mostly for naming the teams and designing the team flag.
                This year, the theme was Mathemagic (portmanteau of mathematics and magic). 
                My team was Sequence Sorcerers. Pretty cool, I know.
            </p>

            <div className="grid grid-cols-2 gap-4 p-4">
                <ImgageWithCaption
                    src="/orientation/shirt-front.jpg"
                    alt="Front of leader shirt"
                    styles="max-w-sm max-h-sm relative w-full rounded-lg
                    border-slate-100 border-solid border-[0.5px]
                    md:hover:transform md:hover:scale-105 md:transition md:duration-200 md:ease-in-out"
                    caption="This is my leader shirt. If you look closely, you can see Mr. Goose, the mascot of our university."
                />

                <ImgageWithCaption
                    src="/orientation/shirt-back.jpg"
                    alt="Back of leader shirt"
                    styles="max-w-sm max-h-sm relative w-full rounded-lg
                    border-slate-100 border-solid border-[0.5px]
                    md:hover:transform md:hover:scale-105 md:transition md:duration-200 md:ease-in-out"
                    caption="That's our team logo. The classic Fibonacci sequence that everyone knows and loves."
                />

                <ImgageWithCaption
                    src="/orientation/pink-tie.jpg"
                    alt="Pink Tie"
                    styles="max-w-sm max-h-sm relative w-full rounded-lg
                    border-slate-100 border-solid border-[0.5px]
                    md:hover:transform md:hover:scale-105 md:transition md:duration-200 md:ease-in-out"
                    caption="They didn't call us Pink Ties for no reasons."
                />

                <ImgageWithCaption
                    src="/orientation/nametag.jpg"
                    alt="Name Tag"
                    styles="max-w-sm max-h-sm relative w-full rounded-lg
                    border-slate-100 border-solid border-[0.5px]
                    md:hover:transform md:hover:scale-105 md:transition md:duration-200 md:ease-in-out"
                    caption="The name's Di. Just D."
                />
            </div>

            <p className="pr-8 text-lg leading-8 font-normal text-gray-800">
                We did a whole lot of stuff. Scavenger Hunt, Search and Solve, N + 1 Legged Race, Nerf War and so much more.
                I had to make sure the first-year students could enjoy the activities, so I didn't exactly have time to take photos.
                Which is kinda a pity, now that I'm looking back at it.
                <br />
                <br />

                The last night of orientation, Market Faire, was definitely the best one.
                By that night, we expected that the first-year students have made themselves familiar with the university,
                so we just hosted different activities in different rooms and the students were free to explore.
                But like I said, we also took the chance to enjoy ourselves as well.
                <br />
                <br />

                During the Market Faire, I decided to take the photo booth twice.
                <br />
                <br />

                First time was with other leaders that I met during karaoke (left photo).
                We decided to do the photo booth on a whim, just for fun. 
                But we ended up failing miserably in trying to make unique poses.
                <br />
                <br />

                Second time was with other leaders in my team (right photo). 
                We certainly had much better choices for poses there.
            </p>

            <div className="grid grid-cols-2 gap-4 p-2">
                <ImgageWithCaption
                    src="/orientation/photobooth1.jpg"
                    alt="Photo Booth 1"
                    styles="max-w-sm max-h-sm relative w-full rounded-lg
                    border-slate-100 border-solid border-[0.5px]
                    md:hover:transform md:hover:scale-105 md:transition md:duration-200 md:ease-in-out"
                    caption="Don't even ask me what happened."
                />

                <ImgageWithCaption
                    src="/orientation/photobooth2.jpg"
                    alt="Photo Booth 2"
                    styles="max-w-sm max-h-sm relative w-full rounded-lg
                    border-slate-100 border-solid border-[0.5px]
                    md:hover:transform md:hover:scale-105 md:transition md:duration-200 md:ease-in-out"
                    caption="M for Math and W for Win. Let's go!"
                />
            </div>

            <p className="pr-8 text-lg leading-8 font-normal text-gray-800">
                And that pretty much wraps up my volunteer experience for Math Orientation.
                It's a really amazing event! Hope I can do this next year as well.
            </p>
        </section>
    )
};

export default Volunteers;