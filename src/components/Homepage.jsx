import { Github, Mail, Linkedin } from 'lucide-react';
import Header from './Header';
import AnimatedElement from './Animations';
import LoadingPage from './LoadingPages';
import AboutMe from './AboutMe';


export default function HomePage() {
    return (
      <LoadingPage>  
    <div className="scroll-smooth text-white bg-white font-sans">
      <Header/>

      {/* Sections */}
      <AnimatedElement delay={100} duration={1000}>
      <section id="home" className="swirling-gradient pt-32 pb-32 bg-gradient-to-br from-purple-950 via-indigo-800 to-blue-600
 w-screen text-center px-6">
          <AnimatedElement delay={100} duration={1200}>
          <h1 className="text-5xl font-bold mb-4"> Imagine Something Cool </h1>
          </AnimatedElement>
          <AnimatedElement delay={200} duration={1200}>
          <p className="text-lg text-indigo-200"> (Website under construction)</p>
          </AnimatedElement>
      </section>
      </AnimatedElement>

      <AnimatedElement delay={300} duration={1200}>
      <AboutMe/>
      </AnimatedElement>
       





      <section id="projects" className="py-24 bg-indigo-800 text-center px-6">
		<AnimatedElement delay={800} duration={1200}>
        	<h2 className="text-3xl font-semibold mb-10">Projects</h2>
		</AnimatedElement>
		<AnimatedElement delay={1000} duration={1200}>
        <div className="grid gap-3 sm:grid-cols-1 lg:grid-cols-2">

          <ProjectCard title="Quantum Exceptional Points" description="Worked with the Soley Group at UW-Madison to analyze experimentally-realizable exceptional points with applications to quantum sensing and ultracold physics" />
          <ProjectCard title="Exotic Particles" description="Searched for the doubly charged Higgs boson and dark photons in collaboration with Fermilab and CMS" />
        </div>
		</AnimatedElement>
    </section>
		

      {/* Footer */}
      <footer className="py-6 text-center text-indigo-300 text-sm">
          <div className="space-x-6">
          <a 
                href="https://github.com/ShriDul21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-200 hover:scale-110 transform inline-block"
                aria-label="GitHub"
              >
                <Github size={18} />
          </a>
          <a 
                href="mailto:shrikar.dulam@gmail.com"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-200 hover:scale-110 transform inline-block"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>

          <a 
                href="https://www.linkedin.com/in/shrikar-dulam/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-200 hover:scale-110 transform inline-block"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
        </div>
        <div> © {new Date().getFullYear()} Shrikar Dulam. Built with React + Tailwind. </div> 
      
      </footer>
    </div>
    </LoadingPage>
  );
}

function ProjectCard({ title, description }) {
  return (
    <div className="bg-white text-black p-6 mx-auto rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}

