import { services } from "@/data"
import { ServiceCard } from "./ui/card"

export const AboutPage = () => {
    return(
        <>
        <div className="p-5 mb-10 flex justify-center items-center" id="about">
            <div className="container">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview</h2>
        <div className="mt-4 text-[#aaa6c3] text-[17px] leading-[30px]">
       <p>
    Experience in JavaScript, and expertise in frameworks
    like React, Nextjs, Angular, Node.js and Three.js for web development. Experience in dart and good in the flutter frameworks for mobile development. I'm a quick learner
    and collaborate closely with clients to create efficient,
    scalable, and user-friendly solutions that solve
    real-world problems. Let's work together to bring your
    ideas to life!
        </p> 
    <p>You can get in contact with me through my mail <i><b>henrytweneboah956@gmail.com</b></i></p>
        </div>
        <div className='mt-20 mb-10 flex justify-center items-center flex-wrap gap-10'>
        {
            services.map((service, index)=>(
                <ServiceCard key={service.title} index={index} {...service}/>
            ))
        }
        </div>
        </div>
        </div>
        </>
    )
}