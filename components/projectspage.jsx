import ProjectionSections from "./ui/projectsections";

export const ProjectPage = () => {
  return (
    <div className="p-5 mb-10 flex justify-center items-center" id="projects">
      <div className="container">
        <div>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            My Work
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projects.
          </h2>
        </div>
        <div className="w-full flex">
          <p className="mt-3 text-[#aaa6c3] text-[17px] leading-[30px]">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            and live demos in it by clicking on the name. It reflects my ability
            to solve complex problems, work with different technologies, and
            manage project effectively.
          </p>
        </div>
        <div className="w-full p-5 text-white h-fit mt-5">
          <ProjectionSections />
        </div>
      </div>
    </div>
  );
};
