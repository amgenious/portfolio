import { AboutPage } from '@/components/about';
import { ContactPage } from '@/components/contact';
import { ExperiencePage } from '@/components/experience';
import { Hero } from '@/components/hero';
import { Navigationbar } from '@/components/navbar';
import { ProjectPage } from '@/components/projectspage';
import { TechStack } from '@/components/techstack';


export default function Home() {
  return (
    <div className='z-0 bg-[#050816] h-full pb-[20px]'>
    <div style={{ 
      backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/test-3c306.appspot.com/o/items%2F6XHLzoWgGSAQzRtVEdKM6.png?alt=media&token=9fdb8f48-4ec0-4a06-8200-2a80ecf8ce2e')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }} className='w-full h-fit'>
      <Navigationbar />
      <Hero />
    </div>
    <AboutPage />
    <ExperiencePage />
    <TechStack />
    <ProjectPage />
    <ContactPage />
    </div>
  );
}
