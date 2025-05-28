// import React, { useState, useEffect } from 'react';
// import { Github, Zap, CheckCircle, ExternalLink, Rocket, GitBranch, Cloud } from 'lucide-react';

// const DeploymentPage = () => {
//   const [connections, setConnections] = useState({
//     github: false,
//     vercel: false
//   });
//   const [isDeploying, setIsDeploying] = useState(false);
//   const [deploymentStatus, setDeploymentStatus] = useState(null);

//   // Particle animation effect (same as portfolio form)
//   useEffect(() => {
//     const particles = document.getElementById('particles');
//     const particleCount = 20;

//     if (particles) {
//       particles.innerHTML = '';
//     }

//     for (let i = 0; i < particleCount; i++) {
//       const size = Math.random() * 8 + 3;
//       const particle = document.createElement('div');
//       particle.classList.add('particle');

//       const left = Math.random() * 100;
//       const duration = Math.random() * 25 + 15;
//       const delay = Math.random() * 5;
//       const color = Math.random() > 0.5 ? '#4f46e5' : '#818cf8';

//       particle.style.width = `${size}px`;
//       particle.style.height = `${size}px`;
//       particle.style.left = `${left}%`;
//       particle.style.top = `${Math.random() * 100}%`;
//       particle.style.backgroundColor = color;
//       particle.style.opacity = `${Math.random() * 0.2 + 0.1}`;
//       particle.style.animationDuration = `${duration}s`;
//       particle.style.animationDelay = `${delay}s`;

//       particles.appendChild(particle);
//     }
//   }, []);
//   useEffect(() => {
//   const urlParams = new URLSearchParams(window.location.search);
//   const token = urlParams.get("token");
//   const error = urlParams.get("error");

//   if (token) {
//     // Store token in localStorage or state
//     localStorage.setItem("github_token", token);
//     setConnections(prev => ({ ...prev, github: true }));
//     alert("✅ GitHub connected successfully!");
    
//     // Optional: Clean up URL
//     window.history.replaceState({}, document.title, window.location.pathname);
//   }

//   if (error) {
//     console.error("GitHub OAuth error:", error);
//     alert("❌ GitHub connection failed: " + error);
//   }
// }, []);


// const handleGithubConnect = () => {
//   const clientId = "Ov23lipU3NQVbPSKficp";
//   const currentFrontendPage = window.location.href; // Store current page
//   const redirectUri = `http://localhost:3000/json/deploy`;

//   const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo%20user&state=${encodeURIComponent(currentFrontendPage)}`;

//   window.location.href = githubAuthUrl;
// };


//   const handleVercelConnect = async () => {
//     try {
//       // Simulate Vercel OAuth flow
//       // In real implementation, this would redirect to Vercel OAuth
//       setTimeout(() => {
//         setConnections(prev => ({ ...prev, vercel: true }));
//       }, 1500);
//     } catch (error) {
//       console.error('Vercel connection failed:', error);
//     }
//   };

//   const handleDeploy = async () => {
//     if (!connections.github || !connections.vercel) {
//       alert('Please connect both GitHub and Vercel before deploying.');
//       return;
//     }

//     setIsDeploying(true);
//     setDeploymentStatus('deploying');

//     try {
//       // Simulate deployment process
//       setTimeout(() => {
//         setDeploymentStatus('success');
//         setIsDeploying(false);
//       }, 5000);
//     } catch (error) {
//       console.error('Deployment failed:', error);
//       setDeploymentStatus('error');
//       setIsDeploying(false);
//     }
//   };

//   const isReadyToDeploy = connections.github && connections.vercel;

//   return (
//     <>
//       <style jsx>{`
//         .particles {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           overflow: hidden;
//           z-index: -1;
//           pointer-events: none;
//         }

//         .particle {
//           position: absolute;
//           border-radius: 50%;
//           opacity: 0.15;
//           animation: particleAnimation linear infinite;
//         }

//         @keyframes particleAnimation {
//           0% { transform: translateY(0) rotate(0deg); }
//           100% { transform: translateY(-1000px) rotate(720deg); }
//         }

//         .gradient-text {
//           background: linear-gradient(90deg, #4f46e5, #818cf8);
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//         }

//         .fade-in {
//           opacity: 0;
//           animation: fadeIn 0.8s forwards;
//         }

//         @keyframes fadeIn {
//           to { opacity: 1; }
//         }

//         .connection-card {
//           animation: slideUp 0.6s forwards;
//           opacity: 0;
//           transform: translateY(20px);
//         }

//         .connection-card:nth-child(1) { animation-delay: 0.1s; }
//         .connection-card:nth-child(2) { animation-delay: 0.2s; }

//         @keyframes slideUp {
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .pulse-animation {
//           animation: pulse 2s infinite;
//         }

//         @keyframes pulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//         }

//         .deploy-glow {
//           box-shadow: 0 0 20px rgba(79, 70, 229, 0.4);
//         }

//         .success-bounce {
//           animation: successBounce 0.6s ease-out;
//         }

//         @keyframes successBounce {
//           0% { transform: scale(0.8) rotate(-10deg); }
//           50% { transform: scale(1.1) rotate(5deg); }
//           100% { transform: scale(1) rotate(0deg); }
//         }

//         .loading-spinner {
//           border: 3px solid #f3f4f6;
//           border-top: 3px solid #4f46e5;
//           border-radius: 50%;
//           width: 24px;
//           height: 24px;
//           animation: spin 1s linear infinite;
//         }

//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>

//       <div className="particles" id="particles"></div>

//       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-12 px-4 relative">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12 fade-in">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
//               Deploy Your Portfolio
//             </h1>
//             <p className="text-lg text-gray-600">
//               Connect your accounts and deploy your portfolio to the world
//             </p>
//           </div>

//           {/* Connection Cards */}
//           <div className="grid md:grid-cols-2 gap-6 mb-12">
//             {/* GitHub Connection */}
//             <div className="connection-card bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-900/5 to-transparent rounded-bl-full"></div>
              
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center">
//                   <Github className="w-8 h-8 text-gray-900 mr-3" />
//                   <h2 className="text-2xl font-bold text-gray-800">GitHub</h2>
//                 </div>
//                 {connections.github && (
//                   <CheckCircle className="w-8 h-8 text-green-500 success-bounce" />
//                 )}
//               </div>
              
//               <p className="text-gray-600 mb-6">
//                 Connect your GitHub account to manage your portfolio repository and enable automatic deployments.
//               </p>
              
//               <button
//                 onClick={handleGithubConnect}
//                 disabled={connections.github}
//                 className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
//                   connections.github
//                     ? 'bg-green-500 text-white cursor-default'
//                     : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg transform hover:scale-105'
//                 }`}
//               >
//                 {connections.github ? (
//                   <>
//                     <CheckCircle className="w-5 h-5 mr-2" />
//                     Connected to GitHub
//                   </>
//                 ) : (
//                   <>
//                     <Github className="w-5 h-5 mr-2" />
//                     Connect GitHub
//                   </>
//                 )}
//               </button>
              
//               {connections.github && (
//                 <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
//                   <div className="flex items-center text-green-700 text-sm">
//                     <GitBranch className="w-4 h-4 mr-2" />
//                     Repository: portfolio-generator/main
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Vercel Connection */}
//             <div className="connection-card bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-black/5 to-transparent rounded-bl-full"></div>
              
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center">
//                   <Zap className="w-8 h-8 text-black mr-3" />
//                   <h2 className="text-2xl font-bold text-gray-800">Vercel</h2>
//                 </div>
//                 {connections.vercel && (
//                   <CheckCircle className="w-8 h-8 text-green-500 success-bounce" />
//                 )}
//               </div>
              
//               <p className="text-gray-600 mb-6">
//                 Connect to Vercel for seamless deployment with automatic builds and global CDN distribution.
//               </p>
              
//               <button
//                 onClick={handleVercelConnect}
//                 disabled={connections.vercel}
//                 className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
//                   connections.vercel
//                     ? 'bg-green-500 text-white cursor-default'
//                     : 'bg-black text-white hover:bg-gray-800 hover:shadow-lg transform hover:scale-105'
//                 }`}
//               >
//                 {connections.vercel ? (
//                   <>
//                     <CheckCircle className="w-5 h-5 mr-2" />
//                     Connected to Vercel
//                   </>
//                 ) : (
//                   <>
//                     <Zap className="w-5 h-5 mr-2" />
//                     Connect Vercel
//                   </>
//                 )}
//               </button>
              
//               {connections.vercel && (
//                 <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
//                   <div className="flex items-center text-green-700 text-sm">
//                     <Cloud className="w-4 h-4 mr-2" />
//                     Project: my-portfolio.vercel.app
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Deployment Section */}
//           <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 text-center">
//             <div className="mb-6">
//               <Rocket className={`w-16 h-16 mx-auto text-indigo-600 mb-4 ${isReadyToDeploy ? 'pulse-animation' : ''}`} />
//               <h2 className="text-2xl font-bold text-gray-800 mb-2">Ready to Launch?</h2>
//               <p className="text-gray-600">
//                 {isReadyToDeploy 
//                   ? 'All connections established! Deploy your portfolio now.' 
//                   : 'Connect both GitHub and Vercel to enable deployment.'
//                 }
//               </p>
//             </div>

//             {/* Connection Status Indicators */}
//             <div className="flex justify-center space-x-8 mb-8">
//               <div className="flex items-center">
//                 <div className={`w-3 h-3 rounded-full mr-2 ${connections.github ? 'bg-green-500' : 'bg-gray-300'}`}></div>
//                 <span className={`text-sm ${connections.github ? 'text-green-600' : 'text-gray-500'}`}>
//                   GitHub {connections.github ? 'Connected' : 'Not Connected'}
//                 </span>
//               </div>
//               <div className="flex items-center">
//                 <div className={`w-3 h-3 rounded-full mr-2 ${connections.vercel ? 'bg-green-500' : 'bg-gray-300'}`}></div>
//                 <span className={`text-sm ${connections.vercel ? 'text-green-600' : 'text-gray-500'}`}>
//                   Vercel {connections.vercel ? 'Connected' : 'Not Connected'}
//                 </span>
//               </div>
//             </div>

//             {/* Deploy Button */}
//             <button
//               onClick={handleDeploy}
//               disabled={!isReadyToDeploy || isDeploying}
//               className={`inline-flex items-center px-12 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transform transition-all duration-300 ${
//                 !isReadyToDeploy || isDeploying
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl hover:scale-105 deploy-glow'
//               }`}
//             >
//               {isDeploying ? (
//                 <>
//                   <div className="loading-spinner mr-3"></div>
//                   Deploying Portfolio...
//                 </>
//               ) : (
//                 <>
//                   <Rocket className="w-6 h-6 mr-3" />
//                   Deploy Portfolio
//                 </>
//               )}
//             </button>

//             {/* Deployment Status */}
//             {deploymentStatus === 'success' && (
//               <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
//                 <div className="flex items-center justify-center text-green-700">
//                   <CheckCircle className="w-6 h-6 mr-2" />
//                   <span className="font-semibold">Portfolio deployed successfully!</span>
//                 </div>
//                 <div className="mt-2">
//                   <a
//                     href="https://your-portfolio.vercel.app"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
//                   >
//                     View Live Portfolio
//                     <ExternalLink className="w-4 h-4 ml-1" />
//                   </a>
//                 </div>
//               </div>
//             )}

//             {deploymentStatus === 'error' && (
//               <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
//                 <div className="text-red-700 font-semibold">
//                   Deployment failed. Please try again.
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Additional Info */}
//           <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
//             <div className="p-6">
//               <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <Github className="w-6 h-6 text-indigo-600" />
//               </div>
//               <h3 className="font-semibold text-gray-800 mb-2">Source Control</h3>
//               <p className="text-sm text-gray-600">
//                 Your portfolio code is safely stored and version-controlled on GitHub
//               </p>
//             </div>
            
//             <div className="p-6">
//               <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <Zap className="w-6 h-6 text-indigo-600" />
//               </div>
//               <h3 className="font-semibold text-gray-800 mb-2">Fast Deployment</h3>
//               <p className="text-sm text-gray-600">
//                 Vercel provides lightning-fast deployments with global CDN
//               </p>
//             </div>
            
//             <div className="p-6">
//               <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <Rocket className="w-6 h-6 text-indigo-600" />
//               </div>
//               <h3 className="font-semibold text-gray-800 mb-2">Auto Updates</h3>
//               <p className="text-sm text-gray-600">
//                 Automatic deployments whenever you update your portfolio
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute top-1/4 left-20 w-16 h-16 bg-indigo-600/10 rounded-full"></div>
//         <div className="absolute top-1/3 right-24 w-24 h-24 bg-indigo-400/10 rounded-full"></div>
//         <div className="absolute bottom-1/4 left-32 w-20 h-20 bg-indigo-600/10 rounded-full"></div>
//         <div className="absolute bottom-1/3 right-40 w-12 h-12 bg-indigo-400/10 rounded-full"></div>
//       </div>
//     </>
//   );
// };

// export default DeploymentPage;



// import React, { useState, useEffect } from 'react';
// import { Github, Zap, CheckCircle, ExternalLink, Rocket, GitBranch, Cloud, Globe } from 'lucide-react';

// const DeploymentPage = () => {
//   const [connections, setConnections] = useState({
//     github: false
//   });
//   const [isDeploying, setIsDeploying] = useState(false);
//   const [deploymentStatus, setDeploymentStatus] = useState(null);
//   const [deploymentUrl, setDeploymentUrl] = useState('');
//   const [repoName, setRepoName] = useState('portfolio-website');

//   // Particle animation effect
//   useEffect(() => {
//     const particles = document.getElementById('particles');
//     const particleCount = 20;

//     if (particles) {
//       particles.innerHTML = '';
//     }

//     for (let i = 0; i < particleCount; i++) {
//       const size = Math.random() * 8 + 3;
//       const particle = document.createElement('div');
//       particle.classList.add('particle');

//       const left = Math.random() * 100;
//       const duration = Math.random() * 25 + 15;
//       const delay = Math.random() * 5;
//       const color = Math.random() > 0.5 ? '#4f46e5' : '#818cf8';

//       particle.style.width = `${size}px`;
//       particle.style.height = `${size}px`;
//       particle.style.left = `${left}%`;
//       particle.style.top = `${Math.random() * 100}%`;
//       particle.style.backgroundColor = color;
//       particle.style.opacity = `${Math.random() * 0.2 + 0.1}`;
//       particle.style.animationDuration = `${duration}s`;
//       particle.style.animationDelay = `${delay}s`;

//       particles.appendChild(particle);
//     }
//   }, []);

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get("token");
//     const error = urlParams.get("error");

//     if (token) {
//       // Store token in memory (don't use localStorage in artifacts)
//       setConnections(prev => ({ ...prev, github: true }));
//       alert("✅ GitHub connected successfully!");
      
//       // Clean up URL
//       window.history.replaceState({}, document.title, window.location.pathname);
//     }

//     if (error) {
//       console.error("GitHub OAuth error:", error);
//       alert("❌ GitHub connection failed: " + error);
//     }
//   }, []);

//   const handleGithubConnect = () => {
//     const clientId = "Ov23lipU3NQVbPSKficp";
//     const currentFrontendPage = window.location.href;
//     const redirectUri = `http://localhost:3000/json/deploy`;

//     const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo%20user&state=${encodeURIComponent(currentFrontendPage)}`;

//     window.location.href = githubAuthUrl;
//   };

//   const handleDeploy = async () => {
//     if (!connections.github) {
//       alert('Please connect GitHub before deploying.');
//       return;
//     }

//     setIsDeploying(true);
//     setDeploymentStatus('deploying');

//     try {
//       // Call your backend deployment endpoint
//       const response = await fetch('http://localhost:3000/json/deployy', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           repoName: repoName,
//           // Include other necessary data
//         }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setDeploymentStatus('success');
//         setDeploymentUrl(result.deploymentUrl);
//       } else {
//         throw new Error(result.error || 'Deployment failed');
//       }
//     } catch (error) {
//       console.error('Deployment failed:', error);
//       setDeploymentStatus('error');
//     } finally {
//       setIsDeploying(false);
//     }
//   };

//   const isReadyToDeploy = connections.github;

//   return (
//     <>
//       <style jsx>{`
//         .particles {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           overflow: hidden;
//           z-index: -1;
//           pointer-events: none;
//         }

//         .particle {
//           position: absolute;
//           border-radius: 50%;
//           opacity: 0.15;
//           animation: particleAnimation linear infinite;
//         }

//         @keyframes particleAnimation {
//           0% { transform: translateY(0) rotate(0deg); }
//           100% { transform: translateY(-1000px) rotate(720deg); }
//         }

//         .gradient-text {
//           background: linear-gradient(90deg, #4f46e5, #818cf8);
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//         }

//         .fade-in {
//           opacity: 0;
//           animation: fadeIn 0.8s forwards;
//         }

//         @keyframes fadeIn {
//           to { opacity: 1; }
//         }

//         .connection-card {
//           animation: slideUp 0.6s forwards;
//           opacity: 0;
//           transform: translateY(20px);
//         }

//         @keyframes slideUp {
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .pulse-animation {
//           animation: pulse 2s infinite;
//         }

//         @keyframes pulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//         }

//         .deploy-glow {
//           box-shadow: 0 0 20px rgba(79, 70, 229, 0.4);
//         }

//         .success-bounce {
//           animation: successBounce 0.6s ease-out;
//         }

//         @keyframes successBounce {
//           0% { transform: scale(0.8) rotate(-10deg); }
//           50% { transform: scale(1.1) rotate(5deg); }
//           100% { transform: scale(1) rotate(0deg); }
//         }

//         .loading-spinner {
//           border: 3px solid #f3f4f6;
//           border-top: 3px solid #4f46e5;
//           border-radius: 50%;
//           width: 24px;
//           height: 24px;
//           animation: spin 1s linear infinite;
//         }

//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>

//       <div className="particles" id="particles"></div>

//       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-12 px-4 relative">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12 fade-in">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
//               Deploy Your Portfolio
//             </h1>
//             <p className="text-lg text-gray-600">
//               Connect GitHub and deploy your portfolio with GitHub Pages
//             </p>
//           </div>

//           {/* Repository Name Input */}
//           <div className="mb-8 max-w-md mx-auto">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Repository Name
//             </label>
//             <input
//               type="text"
//               value={repoName}
//               onChange={(e) => setRepoName(e.target.value)}
//               placeholder="my-portfolio-website"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//             />
//           </div>

//           {/* GitHub Connection */}
//           <div className="max-w-2xl mx-auto mb-12">
//             <div className="connection-card bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-900/5 to-transparent rounded-bl-full"></div>
              
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center">
//                   <Github className="w-8 h-8 text-gray-900 mr-3" />
//                   <h2 className="text-2xl font-bold text-gray-800">GitHub Pages</h2>
//                 </div>
//                 {connections.github && (
//                   <CheckCircle className="w-8 h-8 text-green-500 success-bounce" />
//                 )}
//               </div>
              
//               <p className="text-gray-600 mb-6">
//                 Connect your GitHub account to create a repository and deploy your portfolio using GitHub Pages.
//               </p>
              
//               <button
//                 onClick={handleGithubConnect}
//                 disabled={connections.github}
//                 className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
//                   connections.github
//                     ? 'bg-green-500 text-white cursor-default'
//                     : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg transform hover:scale-105'
//                 }`}
//               >
//                 {connections.github ? (
//                   <>
//                     <CheckCircle className="w-5 h-5 mr-2" />
//                     Connected to GitHub
//                   </>
//                 ) : (
//                   <>
//                     <Github className="w-5 h-5 mr-2" />
//                     Connect GitHub
//                   </>
//                 )}
//               </button>
              
//               {connections.github && (
//                 <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
//                   <div className="flex items-center text-green-700 text-sm">
//                     <GitBranch className="w-4 h-4 mr-2" />
//                     Ready to deploy to: {repoName}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Deployment Section */}
//           <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 text-center">
//             <div className="mb-6">
//               <Rocket className={`w-16 h-16 mx-auto text-indigo-600 mb-4 ${isReadyToDeploy ? 'pulse-animation' : ''}`} />
//               <h2 className="text-2xl font-bold text-gray-800 mb-2">Ready to Launch?</h2>
//               <p className="text-gray-600">
//                 {isReadyToDeploy 
//                   ? 'GitHub connected! Deploy your portfolio to GitHub Pages now.' 
//                   : 'Connect GitHub to enable deployment.'
//                 }
//               </p>
//             </div>

//             {/* Connection Status Indicator */}
//             <div className="flex justify-center mb-8">
//               <div className="flex items-center">
//                 <div className={`w-3 h-3 rounded-full mr-2 ${connections.github ? 'bg-green-500' : 'bg-gray-300'}`}></div>
//                 <span className={`text-sm ${connections.github ? 'text-green-600' : 'text-gray-500'}`}>
//                   GitHub {connections.github ? 'Connected' : 'Not Connected'}
//                 </span>
//               </div>
//             </div>

//             {/* Deploy Button */}
//             <button
//               onClick={handleDeploy}
//               disabled={!isReadyToDeploy || isDeploying}
//               className={`inline-flex items-center px-12 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transform transition-all duration-300 ${
//                 !isReadyToDeploy || isDeploying
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl hover:scale-105 deploy-glow'
//               }`}
//             >
//               {isDeploying ? (
//                 <>
//                   <div className="loading-spinner mr-3"></div>
//                   Deploying to GitHub Pages...
//                 </>
//               ) : (
//                 <>
//                   <Globe className="w-6 h-6 mr-3" />
//                   Deploy to GitHub Pages
//                 </>
//               )}
//             </button>

//             {/* Deployment Status */}
//             {deploymentStatus === 'success' && (
//               <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
//                 <div className="flex items-center justify-center text-green-700 mb-2">
//                   <CheckCircle className="w-6 h-6 mr-2" />
//                   <span className="font-semibold">Portfolio deployed successfully!</span>
//                 </div>
//                 {deploymentUrl && (
//                   <div className="mt-2">
//                     <a
//                       href={deploymentUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
//                     >
//                       View Live Portfolio
//                       <ExternalLink className="w-4 h-4 ml-1" />
//                     </a>
//                   </div>
//                 )}
//                 <div className="mt-2 text-sm text-gray-600">
//                   Note: It may take a few minutes for GitHub Pages to be fully active.
//                 </div>
//               </div>
//             )}

//             {deploymentStatus === 'deploying' && (
//               <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
//                 <div className="text-blue-700 font-semibold">
//                   🚀 Creating repository and setting up GitHub Pages...
//                 </div>
//                 <div className="text-sm text-blue-600 mt-1">
//                   This may take a few moments
//                 </div>
//               </div>
//             )}

//             {deploymentStatus === 'error' && (
//               <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
//                 <div className="text-red-700 font-semibold">
//                   Deployment failed. Please try again.
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Additional Info */}
//           <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
//             <div className="p-6">
//               <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <Github className="w-6 h-6 text-indigo-600" />
//               </div>
//               <h3 className="font-semibold text-gray-800 mb-2">GitHub Repository</h3>
//               <p className="text-sm text-gray-600">
//                 Your portfolio will be stored in a new GitHub repository
//               </p>
//             </div>
            
//             <div className="p-6">
//               <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <Globe className="w-6 h-6 text-indigo-600" />
//               </div>
//               <h3 className="font-semibold text-gray-800 mb-2">GitHub Pages</h3>
//               <p className="text-sm text-gray-600">
//                 Free hosting with custom domain support and HTTPS
//               </p>
//             </div>
            
//             <div className="p-6">
//               <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <Rocket className="w-6 h-6 text-indigo-600" />
//               </div>
//               <h3 className="font-semibold text-gray-800 mb-2">Easy Updates</h3>
//               <p className="text-sm text-gray-600">
//                 Push changes to your repository to update your live site
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute top-1/4 left-20 w-16 h-16 bg-indigo-600/10 rounded-full"></div>
//         <div className="absolute top-1/3 right-24 w-24 h-24 bg-indigo-400/10 rounded-full"></div>
//         <div className="absolute bottom-1/4 left-32 w-20 h-20 bg-indigo-600/10 rounded-full"></div>
//         <div className="absolute bottom-1/3 right-40 w-12 h-12 bg-indigo-400/10 rounded-full"></div>
//       </div>
//     </>
//   );
// };

// export default DeploymentPage;




import React, { useState, useEffect } from 'react';
import { Github, Zap, CheckCircle, ExternalLink, Rocket, GitBranch, Cloud, Globe } from 'lucide-react';

// Generate unique user ID for this session

const DeploymentPage = () => {
  // const storedUserId = localStorage.getItem('portfolioUserId');
  // console.log('Stored User ID:', storedUserId);
  const storedUserId = localStorage.getItem('portfolioUserId');
console.log('Raw stored userId:', storedUserId);
console.log('Type:', typeof storedUserId);

// Handle null/undefined/string "null" cases
if (!storedUserId || storedUserId === 'null' || storedUserId === 'undefined') {
  alert('No portfolio found. Please create a portfolio first.');
  window.location.href = '/';
  return;
}
  
  const [connections, setConnections] = useState({
    github: false
  });
  const [githubToken, setGithubToken] = useState('');
  const [username, setUsername] = useState('');
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploymentStatus, setDeploymentStatus] = useState(null);
  const [deploymentUrl, setDeploymentUrl] = useState('');
  const [repoName, setRepoName] = useState('portfolio-website');

  // Particle animation effect
  useEffect(() => {
    const particles = document.getElementById('particles');
    const particleCount = 20;

    if (particles) {
      particles.innerHTML = '';
    }

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 8 + 3;
      const particle = document.createElement('div');
      particle.classList.add('particle');

      const left = Math.random() * 100;
      const duration = Math.random() * 25 + 15;
      const delay = Math.random() * 5;
      const color = Math.random() > 0.5 ? '#4f46e5' : '#818cf8';

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.backgroundColor = color;
      particle.style.opacity = `${Math.random() * 0.2 + 0.1}`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;

      particles.appendChild(particle);
    }
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const usernameParam = urlParams.get("username");
    const error = urlParams.get("error");

    if (token) {
      // Store token and username in component state
      setGithubToken(token);
      setConnections(prev => ({ ...prev, github: true }));
      
      if (usernameParam) {
        setUsername(usernameParam);
      }
      
      alert("✅ GitHub connected successfully!");
      
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    if (error) {
      console.error("GitHub OAuth error:", error);
      alert("❌ GitHub connection failed: " + error);
    }
  }, []);

  const handleGithubConnect = () => {
    const clientId = "Ov23lipU3NQVbPSKficp";
    const currentFrontendPage = window.location.href;
    const redirectUri = `http://localhost:3000/json/deploy`;

    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo%20user&state=${encodeURIComponent(currentFrontendPage)}`;

    window.location.href = githubAuthUrl;
  };

  const handleDeploy = async () => {
    if (!connections.github || !githubToken) {
      alert('Please connect GitHub before deploying.');
      return;
    }

    if (!repoName.trim()) {
      alert('Please enter a repository name.');
      return;
    }

    setIsDeploying(true);
    setDeploymentStatus('deploying');

    try {
      // Call your backend deployment endpoint
      const response = await fetch('http://localhost:3000/json/deployy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${githubToken}`,
          'userId': storedUserId,
        },
        body: JSON.stringify({
          repoName: repoName.trim(),
          token: githubToken,
          userId: storedUserId,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setDeploymentStatus('success');
        setDeploymentUrl(result.deploymentUrl);
      } else {
        throw new Error(result.error || result.details || 'Deployment failed');
      }
    } catch (error) {
      console.error('Deployment failed:', error);
      setDeploymentStatus('error');
      alert(`Deployment failed: ${error.message}`);
    } finally {
      setIsDeploying(false);
    }
  };

  const isReadyToDeploy = connections.github;

  return (
    <>
      <style jsx>{`
        .particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.15;
          animation: particleAnimation linear infinite;
        }

        @keyframes particleAnimation {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-1000px) rotate(720deg); }
        }

        .gradient-text {
          background: linear-gradient(90deg, #4f46e5, #818cf8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .fade-in {
          opacity: 0;
          animation: fadeIn 0.8s forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        .connection-card {
          animation: slideUp 0.6s forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pulse-animation {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .deploy-glow {
          box-shadow: 0 0 20px rgba(79, 70, 229, 0.4);
        }

        .success-bounce {
          animation: successBounce 0.6s ease-out;
        }

        @keyframes successBounce {
          0% { transform: scale(0.8) rotate(-10deg); }
          50% { transform: scale(1.1) rotate(5deg); }
          100% { transform: scale(1) rotate(0deg); }
        }

        .loading-spinner {
          border: 3px solid #f3f4f6;
          border-top: 3px solid #4f46e5;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div className="particles" id="particles"></div>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-12 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Deploy Your Portfolio
            </h1>
            <p className="text-lg text-gray-600">
              Connect GitHub and deploy your portfolio with GitHub Pages
            </p>
          </div>

          {/* Repository Name Input */}
          <div className="mb-8 max-w-md mx-auto">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Repository Name
            </label>
            <input
              type="text"
              value={repoName}
              onChange={(e) => setRepoName(e.target.value)}
              placeholder="my-portfolio-website"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          {/* GitHub Connection */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="connection-card bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-900/5 to-transparent rounded-bl-full"></div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Github className="w-8 h-8 text-gray-900 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800">GitHub Pages</h2>
                </div>
                {connections.github && (
                  <CheckCircle className="w-8 h-8 text-green-500 success-bounce" />
                )}
              </div>
              
              <p className="text-gray-600 mb-6">
                Connect your GitHub account to create a repository and deploy your portfolio using GitHub Pages.
              </p>
              
              <button
                onClick={handleGithubConnect}
                disabled={connections.github}
                className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  connections.github
                    ? 'bg-green-500 text-white cursor-default'
                    : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg transform hover:scale-105'
                }`}
              >
                {connections.github ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Connected to GitHub
                  </>
                ) : (
                  <>
                    <Github className="w-5 h-5 mr-2" />
                    Connect GitHub
                  </>
                )}
              </button>
              
              {connections.github && (
                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center text-green-700 text-sm">
                    <GitBranch className="w-4 h-4 mr-2" />
                    Ready to deploy as: {username ? `${username}/${repoName}` : repoName}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Deployment Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 text-center">
            <div className="mb-6">
              <Rocket className={`w-16 h-16 mx-auto text-indigo-600 mb-4 ${isReadyToDeploy ? 'pulse-animation' : ''}`} />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Ready to Launch?</h2>
              <p className="text-gray-600">
                {isReadyToDeploy 
                  ? 'GitHub connected! Deploy your portfolio to GitHub Pages now.' 
                  : 'Connect GitHub to enable deployment.'
                }
              </p>
            </div>

            {/* Connection Status Indicator */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${connections.github ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <span className={`text-sm ${connections.github ? 'text-green-600' : 'text-gray-500'}`}>
                  GitHub {connections.github ? 'Connected' : 'Not Connected'}
                </span>
              </div>
            </div>

            {/* Deploy Button */}
            <button
              onClick={handleDeploy}
              disabled={!isReadyToDeploy || isDeploying}
              className={`inline-flex items-center px-12 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transform transition-all duration-300 ${
                !isReadyToDeploy || isDeploying
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl hover:scale-105 deploy-glow'
              }`}
            >
              {isDeploying ? (
                <>
                  <div className="loading-spinner mr-3"></div>
                  Deploying to GitHub Pages...
                </>
              ) : (
                <>
                  <Globe className="w-6 h-6 mr-3" />
                  Deploy to GitHub Pages
                </>
              )}
            </button>

            {/* Deployment Status */}
            {deploymentStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center justify-center text-green-700 mb-2">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Portfolio deployed successfully!</span>
                </div>
                {deploymentUrl && (
                  <div className="mt-2">
                    <a
                      href={deploymentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      View Live Portfolio
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                )}
                <div className="mt-2 text-sm text-gray-600">
                  Note: It may take a few minutes for GitHub Pages to be fully active.
                </div>
              </div>
            )}

            {deploymentStatus === 'deploying' && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-blue-700 font-semibold">
                  🚀 Creating repository and setting up GitHub Pages...
                </div>
                <div className="text-sm text-blue-600 mt-1">
                  This may take a few moments
                </div>
              </div>
            )}

            {deploymentStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="text-red-700 font-semibold">
                  Deployment failed. Please try again.
                </div>
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Github className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">GitHub Repository</h3>
              <p className="text-sm text-gray-600">
                Your portfolio will be stored in a new GitHub repository
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">GitHub Pages</h3>
              <p className="text-sm text-gray-600">
                Free hosting with custom domain support and HTTPS
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Easy Updates</h3>
              <p className="text-sm text-gray-600">
                Push changes to your repository to update your live site
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-20 w-16 h-16 bg-indigo-600/10 rounded-full"></div>
        <div className="absolute top-1/3 right-24 w-24 h-24 bg-indigo-400/10 rounded-full"></div>
        <div className="absolute bottom-1/4 left-32 w-20 h-20 bg-indigo-600/10 rounded-full"></div>
        <div className="absolute bottom-1/3 right-40 w-12 h-12 bg-indigo-400/10 rounded-full"></div>
      </div>
    </>
  );
};

export default DeploymentPage;