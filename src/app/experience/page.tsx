'use client'
import React from "react";
import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/cards/ExperienceCard";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Experience = () => {
    return (
        <section className="w-[85%] mx-auto text-slate-50 pt-8 pb-16">
            <h1 className="text-3xl md:text-[60px] lg:text-[80px] font-bold text-green-500 mb-16">
                So... what jobs did I take on?
            </h1>
            <p className="font-bold text-gray-800">Here's a little timeline of the jobs I have worked and am working on.</p>
            <Timeline position="alternate">
                {experiences.map(({ company, role, date, location, desc }, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot color={index === 0 ? "grey" : "success"} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <ExperienceCard
                                company={company}
                                role={role}
                                date={date}
                                location={location}
                                desc={desc}
                            />
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </section>
    );
};

export default Experience;