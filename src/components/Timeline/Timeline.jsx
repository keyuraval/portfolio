import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase as WorkIcon } from 'react-icons/fa';
import { FaSchool as SchoolIcon } from 'react-icons/fa';

import './Timeline.css'

const Timeline = () => {
    return (
        <>
            <div id="work-experience">
                <div className="bg-primary">
                    <p className="base-text sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                        Education and
                    </p>
                    <h2 className="experience-text text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                        Work Experience.
                    </h2>
                </div>

                <VerticalTimeline>

                <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "rgb(13 55 76)", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
                        date="Nov 2022 - Apr 2023"
                        iconStyle={{ background: "#081b29", color: "#f8efef" }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Research Intern@RaapidAI</h3>
                        <h4 className="vertical-timeline-element-subtitle">Remote(Jan 2024-Current)</h4>
                        <p>
                            Working as Research intern at RaapidAI.Contributing to DL pipeline using Python,MySql and DVC.
                        </p>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "rgb(13 55 76)", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
                        date="Nov 2022 - Apr 2023"
                        iconStyle={{ background: "#081b29", color: "#f8efef" }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Frontend Developer Intern@Talrn</h3>
                        <h4 className="vertical-timeline-element-subtitle">Remote(Oct 2022-Dec 2022)</h4>
                        <p>
                            Worked as an Intern for 3 months, and Managed, Designed & Developed a carrer page of the company.
                        </p>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "rgb(13 55 76)", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
                        date="2020 - present"
                        iconStyle={{ background: "#081b29", color: "#f8efef" }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">U.V.Patel College of Engineering</h3>
                        <h4 className="vertical-timeline-element-subtitle">Mehsana,Gujrat</h4>
                        <p>
                            Pursuing Bachleor's of Technology in Computer Science with an aggregate of 8.76 CGPA
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "rgb(13 55 76)", color: "#fffeee" }}
                        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
                        date="2014 - 2019"
                        iconStyle={{ background: "#081b29", color: "#f8efef" }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Divine High School</h3>
                        <h4 className="vertical-timeline-element-subtitle">Rajkot, Gujarat</h4>
                        <p>
                            Completed my secondary education in 2018 and my senior secondary education in 2020.
                        </p>
                    </VerticalTimelineElement>

                    {/* <VerticalTimelineElement
        iconStyle={{ background: "lightgray", color: "#fff" }}
        icon={<StarIcon />}
      /> */}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default Timeline;
