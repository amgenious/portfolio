

export const Hero = () => {
    return(
        <>
        <section className="w-full h-[55rem] flex justify-center mx-auto p-5">
        <div className=" flex justify-center items-center gap-5">
       <div className='flex flex-col justify-center items-center mt-5'>
      <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
      <div className='w-1 h-80 violet-gradient'></div>
        </div>
        <div>
          <h1> <span className='text-[#915eff] text-[90px] font-bold'>Hi, I'm Henry</span></h1>
          <p className="mt-2 text-white text-[30px]">
            I develop user 
            interfaces, web<br className='sm:block hidden'></br> applications and moblie apps <br className='sm:block hidden'></br>
            for individuals and companies.
          </p>
        </div>
        </div>
        </section>
        </>
    )
}