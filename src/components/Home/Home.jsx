import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Create particles animation
    const particles = document.getElementById('particles');
    const particleCount = 30;

    // Clear existing particles if any
    if (particles) {
      particles.innerHTML = '';
    }

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 10 + 5;
      const particle = document.createElement('div');
      particle.classList.add('particle');

      // Random properties
      const left = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      const color = Math.random() > 0.5 ? '#4f46e5' : '#818cf8';

      // Apply styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.backgroundColor = color;
      particle.style.opacity = `${Math.random() * 0.3}`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;

      if (particles) {
        particles.appendChild(particle);
      }
    }
  }, []);

  return (
    <>
      <style jsx>{`
        body {
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay-1 {
          animation: float 6s ease-in-out 1s infinite;
        }

        .animate-float-delay-2 {
          animation: float 6s ease-in-out 2s infinite;
        }

        .animate-float-delay-3 {
          animation: float 6s ease-in-out 3s infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        .animate-pulse-button {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
          100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
        }

        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.3;
          animation: particleAnimation linear infinite;
        }

        @keyframes particleAnimation {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-1000px) rotate(720deg); }
        }

        .fade-in {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }

        .slide-up {
          opacity: 0;
          transform: translateY(20px);
          animation: slideUp 1s forwards;
          animation-delay: 0.5s;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .gradient-text {
          background: linear-gradient(90deg, #4f46e5, #818cf8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>

      <div className="particles" id="particles"></div>

      <main className="pt-24 pb-16 relative overflow-hidden min-h-screen flex items-center bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in gradient-text">
              Create Your Professional Portfolio in Minutes
            </h1>

            <p 
              className="text-lg md:text-xl text-gray-600 mb-10 fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              Choose from beautiful templates, customize your style, and showcase
              your work without coding. Your perfect portfolio is just a few
              clicks away.
            </p>

            <div className="slide-up">
              <a
                href="dataentry"
                className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-button whitespace-nowrap"
              >
                Get Started
              </a>
            </div>

            <div
              className="mt-16 text-gray-600 italic fade-in"
              style={{ animationDelay: '0.8s' }}
            >
              <p className="text-xl">
                "The portfolio you create here will open doors to opportunities
                you never imagined."
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-20 w-16 h-16 bg-indigo-600/10 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-24 w-24 h-24 bg-indigo-400/10 rounded-full animate-float-delay-1"></div>
        <div className="absolute bottom-1/4 left-32 w-20 h-20 bg-indigo-600/10 rounded-full animate-float-delay-2"></div>
        <div className="absolute bottom-1/3 right-40 w-12 h-12 bg-indigo-400/10 rounded-full animate-float-delay-3"></div>

        {/* Abstract Shapes */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-600/5 to-indigo-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-l from-indigo-600/5 to-indigo-400/5 rounded-full blur-3xl"></div>
      </main>
    </>
  );
};

export default Home;