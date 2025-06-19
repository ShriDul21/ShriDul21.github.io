import { Github, Mail, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Name on the left */}
        <h1 className="text-2xl font-sans font-bold text-gray-800 tracking-tight hover:text-indigo-600 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
          Shrikar Dulam
        </h1>

        {/* Navigation with integrated icons */}
        <nav>
          <ul className="flex items-center space-x-6 text-sm font-medium text-gray-700">
            <li><a href="#home" className="hover:text-indigo-600 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-600 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a></li>
            
            {/* Separator */}
            <li className="h-4 w-px bg-gray-300"></li>
            
            {/* Contact icons */}
            <li>
              <a 
                href="https://github.com/ShriDul21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-200 hover:scale-110 transform inline-block"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </li>
            <li>
              <a 
                href="mailto:shrikar.dulam@gmail.com"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-200 hover:scale-110 transform inline-block"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/shrikar-dulam/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-200 hover:scale-110 transform inline-block"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}