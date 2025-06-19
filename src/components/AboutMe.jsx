
export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-purple-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Content Container */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12">
          {/* Left Side - Profile Picture with Title */}
          <div className="flex-shrink-0 flex flex-col items-center space-y-6">
            {/* About Me Title */}
            <h2 className="text-3xl font-semibold text-white">About Me</h2>
            
            <div className="w-48 h-48 lg:w-75 lg:h-75 rounded-full overflow-hidden shadow-2xl">
              {/* Replace with your actual image */}
              <img 
                src="/image.png" 
                alt="Shrikar Dulam"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
          
          {/* Right Side - Details */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-lg text-indigo-100 leading-relaxed">
                I'm an undergraduate student at the University of Illinois Urbana-Champaign majoring in CS+Physics! My research interests lie at the intersection of quantum physics and computational science, with a focus on quantum computing and quantum chemistry. I also hope to delve deeper into numerical algorithms and AI. 

              </p>
              
              <p className="text-lg text-indigo-100 leading-relaxed">
                When I'm not working, you'll find me on the volleyball court or hanging out with friends. Please reach out to me if you have any questions or just want to chat! I'm always open to new ideas and collaborations.
              </p>
            </div>
            
            {/* Skills or additional info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">What I Do</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-700/50 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="font-medium text-white mb-2">Languages</h4>
                  <p className="text-sm text-indigo-200">Python, Java, C++, React, Tailwind, Qiskit</p>
                </div>
                <div className="bg-purple-700/50 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="font-medium text-white mb-2">Clubs</h4>
                  <p className="text-sm text-indigo-200">Volleyball</p>
                </div>
                <div className="bg-purple-700/50 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="font-medium text-white mb-2">Research</h4>
                  <p className="text-sm text-indigo-200">Quantum Scattering, High Energy Physics</p>
                </div>
                <div className="bg-purple-700/50 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="font-medium text-white mb-2">Misc. Content</h4>
                  <p className="text-sm text-indigo-200">Coming Soon!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}