import { technologies } from "@/data"
import { TechStackCard } from "./ui/techstackacard"

export const TechStack = () => {
    return(
        <div className="p-5 mb-10 flex justify-center items-center">
            <div className="container">
            <div>
            <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Programming Languages and Frameworks</p>
            <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>TechStacks</h2>
                </div>
                <div className="mt-20 flex flex-wrap justify-center items-center gap-3">
                    {
                        technologies.map((technology,index) => (
                            <TechStackCard index={index} key={technology.name} {...technology}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}