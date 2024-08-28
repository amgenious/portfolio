"use client"
import React, { useState } from 'react'
import { projects } from "@/data"
import { ProjectCard } from "./projectcard"

const ProjectionSections = () => {
    const [isFullStack, setIsFullStack] = useState(true);

    const changeApp = () => {
        setIsFullStack(false);
    }

    const changeWeb = () => {
        setIsFullStack(true);
    }

    return (
        <>
            <div className='flex justify-center items-center gap-5'>
                <div
                    className={`p-3 rounded-lg cursor-pointer ${isFullStack ? 'bg-blue-400 hover:bg-blue-300' : 'bg-blue-950'}`}
                    onClick={changeWeb}
                >
                    Full Stack Web
                </div>
                <div
                    className={`p-3 rounded-lg cursor-pointer ${!isFullStack ? 'bg-blue-400 hover:bg-blue-300' : 'bg-blue-950'}`}
                    onClick={changeApp}
                >
                    Mobile Apps
                </div>
            </div>

            <div className='mt-20 flex flex-wrap gap-7 justify-center items-center'>
                {isFullStack
                    ? projects
                        .filter((project) => project.category === "web")
                        .sort((a, b) => b.id - a.id)
                        .map((project, index) => (
                            <ProjectCard index={index} key={project.name} {...project} />
                        ))
                    : projects
                        .filter((project) => project.category === "app")
                        .map((project, index) => (
                            <ProjectCard index={index} key={project.name} {...project} />
                        ))
                }
            </div>
        </>
    )
}

export default ProjectionSections
