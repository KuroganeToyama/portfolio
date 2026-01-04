import Button from "@/components/button/Button";
import ImgageWithCaption from "@/components/ImageWithCaption";
import Hyperlink from "@/components/Hyperlink";
import React from "react";

const About = () => {
  return (
    <section className="w-[85%] mx-auto grid md:grid-cols-[2fr,1fr] gap-8 text-slate-50 pt-8 pb-16">
      <h1 className="text-4xl md:text-5xl lg:text-[80px] font-bold text-green-500">So... who am I?</h1>
      <p className="pr-8 text-lg leading-8 font-normal text-gray-800">
        To the person viewing this page, hello there.
        <br />
        <br />

        I&apos;m Di (pronounced as the letter D), a Computer Science undergraduate student at the{" "}
        <Hyperlink
            link="https://uwaterloo.ca"
            text="University of Waterloo"
        />
        {"."} I'd say that I've been doing pretty well with school so far. 
        I enjoy the course materials. The exams are always painful.
        <br />
        <br />

        A bit about my experience.
        <br />
        <br />

        I used to work as an <b>Instruction Support Assistant (ISA)</b> at the{" "}
        <Hyperlink
            link="https://cs.uwaterloo.ca/"
            text="School of Computer Science"
        />
        {"."} ISA is a fancy term for TA, in the sense that in addition to what a TA would normally
        do (i.e. marking assignments, marking exams, helping students), I also maintained the entire
        technical infrastructure that ran the CS courses. I also developed a couple of tools to boost 
        productivity in that regard.
        <br />
        <br />

        I also used to work as a <b>Technical Solutions Developer</b> at{" "}
        <Hyperlink
            link="https://watspeed.uwaterloo.ca/index.html"
            text="WatSPEED"
        />
        {"."} Internal departments in the company always have some technical needs, like automation, 
        data analysis, retrieving financial data, building data reports and dashboards, etc. The variety 
        of tasks I recevied was rather huge. Regardless, whenever they have a technical need, they reach 
        out to me, I analyze their requirements, develop solutions on my own, test them properly, and 
        monitor how my solutions perform in production until I could call it done. Think of my job as 
        Product Design but for internal departments. 
        <br />
        <br />

        Recently, I worked as a <b>Full Stack Software Developer</b> at{" "}
        <Hyperlink
            link="https://www.genesys.com/genesys-cloud"
            text="Genesys Cloud"
        />
        {"."} The company provides cloud solutions for customer experience orchestration, and my team 
        was essentially responsible for the services and infrastructure that allow the company to provide 
        what it does. I worked a lot with AWS and maintained a lot of APIs for both public and internal usage.
        <br />
        <br />

        I've also been spending my time as a developer in the{" "}
        <Hyperlink
            link="https://csclub.uwaterloo.ca/"
            text="Computer Science Club"
        />
        {"."} Our club runs and provides a lot of services, including but not limited to our own Linux machines, 
        our own cloud storage, our own Google Drive, our own Google Photos, and our own Discord bot. And 
        because of that, we also have to maintain our physical servers. So while I'm not a sysadmin, I did gain 
        a lot of experience in infrastructure.
        <br />
        <br />

        Additionally, I enjoy programming and problem-solving, like many others.
        I solve daily LeetCode problems and occasionally try solving some hard problems.
        I also enjoy experimenting with AI frameworks to build cool apps and tools.
        <br />
        <br />

        Anyways, feel free to check out other pages on my website.
        <br />
        <br />

        Oh, and here's my little resume if you're interested.
      </p>
      <Button label="View My Resume" path="/resume.pdf" />
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