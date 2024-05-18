'use client'
import { experiences } from "@/data"
import { ExperienceCard } from "./ui/experiencecard"
import { VerticalTimeline } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'

export const ExperiencePage = () => {
    return(
        <>
        <div className="p-5 mb-10 flex justify-center items-center" id="experience">
            <div className="container">
                <div>
            <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>What i have done so far</p>
            <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Work Experience</h2>
                </div>
                    <div className="mt-20 flex flex-col">
                        <VerticalTimeline>
                        {
                            experiences.map((experience, index)=>(
                                <ExperienceCard  key={index} experience={experience} />
                            ))
                        }
                        </VerticalTimeline>
                    </div>
            </div>
        </div>
        </>
    )
}