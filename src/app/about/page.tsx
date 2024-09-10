import Button from "@/components/button/Button";
import ImgageWithCaption from "@/components/ImageWithCaption";
import React from "react";

const About = () => {
  return (
    <section className="w-[85%] mx-auto grid md:grid-cols-[2fr,1fr] gap-8 text-slate-50 pt-8 pb-16">
      <h1 className="text-4xl md:text-5xl lg:text-[80px] font-bold text-green-500">So... who am I?</h1>
      <p className="pr-8 text-lg leading-8 font-normal text-gray-800">
        To the person viewing this page, hello there!
        <br />
        <br />

        I&apos;m Di (pronounced as the letter D), a Computer Science student at{" "}
        <a href="https://uwaterloo.ca" className="hover:text-yellow-500">
            University of Waterloo
        </a>
        {"."} I'd say that I've been doing pretty well with school so far. 
        I enjoy the course materials. But I don't exactly enjoy exams.
        I think a lot of people would agree with me on this.
        <br />
        <br />

        I&apos;m currently part-timing as Instruction Support Assistant (ISA) at the{" "}
        <a href="https://cs.uwaterloo.ca/" className="hover:text-red-500">
            School of Computer Science
        </a>
        {"."} In the past, I&apos;ve also worked as an ISA in full-time capacity.
        <br />
        <br />

        I enjoy programming and problem-solving, like many others.
        I solve daily LeetCode problems and occasionally try solving some hard problems.
        But I also enjoy experimenting with new tools and technology! 
        Not to say that I didn't screw anything up, but I do very much enjoy tinkering with new toys. 
        <br />
        <br />

        I'm also spending my time as a developer in the{" "}
        <a href="https://csclub.uwaterloo.ca/" className="hover:text-blue-500">
            Computer Science Club
        </a>
        {"."} Most of the time, I take a look at our project board, pick a ticket and work on it. 
        Sometimes I fix a bug (or multiple ones), sometimes I develop new features (and fix even more bugs).
        A couple of months ago, I got promoted to lead developer for the Discord Bot team.
        So I'm also spending my time as a product manager (more or less).
        Quite a lot of work, but it's also fun work!
        <br />
        <br />

        I&apos;m currently seeking Winter 2025 co-op positions/internships. So if you think 
        I&apos;d be a great addition for your team, please reach out! I'd really appreciate it!
        <br />
        <br />

        Feel free to check out other pages on my website!
        <br />
        <br />

        Oh, and here's my little resume if you're interested.
      </p>
      <Button label="View My Resume!" path="/resume.pdf" />
      <div className="row-start-1 md:col-start-2 md:row-end-3">
        <ImgageWithCaption
            src="/images/headshot.jpg"
            alt="headshot"
            styles="max-w-sm max-h-sm relative w-full rounded-lg
                    border-slate-100 border-solid border-[0.5px]
                    md:hover:transform md:hover:scale-105 md:transition md:duration-200 md:ease-in-out"
            caption="I took this selfie in January 2024, right in front of my ISA office. In my opinion, I could have smiled a bit more."
        />
      </div>
    </section>
  );
};

export default About;