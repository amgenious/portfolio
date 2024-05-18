'use client'
import Image from "next/image"

export const ServiceCard = ({index, title, icon}) => {
    return(
        <div className="xs:w-[250px] w-[300px]">
            <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                <div className="bg-[#151030] rounded-[20px] py-5 px-12 min-h-[280px] flex
          justify-evenly items-center flex-col">
                <Image 
                src={icon} alt={title} className="w-16 h-16 object-contain"
                />
                 <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
                </div>
            </div>
        </div>
    )
}