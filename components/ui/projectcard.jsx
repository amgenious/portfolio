import { github } from "@/assets"
import Image from "next/image"


export const ProjectCard = ({index, name, web_link, description, tags, image,source_code_link }) => {
    return(
        
        <div 
        className="bg-[#151030] p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className='relative w-full h-[230px]'>
            <Image 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
            />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <a href={source_code_link} target="_blank"
          className="black-gradient w-10 h-10 rounded-full flex justify-center
          items-center cursor-pointer"
          >
            <Image 
            src={github}
            alt="github"
            className='w-1/2 h-1/2
            object-contain'
            />
          </a>
        </div>
          </div>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'><a href={web_link} target='_blank'>{name}</a></h3>
            <p className='mt-2 text-[#aaa6c3] text-[14px]'>{description}</p>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
          </div>
        </div>
    )
}