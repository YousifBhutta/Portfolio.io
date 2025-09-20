import React, { useState, useEffect, useRef } from 'react';
import TaskApp from './TaskManager.jsx';
import { Download, ChevronLeft, ChevronRight, Menu, X, Mail, Github, Linkedin, Phone, ChevronDown, ChevronUp, Eye } from 'lucide-react';
import { motion, useInView } from 'framer-motion';


// Data for projects and skills
const projectData = {
  all: [
    { title: "Portfolio", category: "frontend", description: "This is the demo portfolio you are currently viewing. It features a modern design, a responsive layout, and animated sections.", imageUrl: "me1.jpg", projectUrl: "https://yousifbhutta.github.io/" },
     { title: "MusicPlayer", category: "frontend", description: "Ek responsive front-end music player jo user ko audio controls aur playlist ke sath interactive experience deta hai.", imageUrl: "me7.jpg", projectUrl: "https://yousifbhutta.github.io/MusicPlayer" },
    { title: "Task-Manager", category: "in-progress", description: "Ek modern task manager application jo user ko apne kaamon ko organize aur track karne mein madad karta hai.", imageUrl: "me2.png", projectUrl: "#" },
     { title: "Blog Website", category: "frontend", description: "Ek blog website jahan users articles publish aur read kar sakte hain.", imageUrl: "me5.jpg", projectUrl: "https://yousifbhutta.github.io/PostBazzar/" },
    { title: "Weather-App", category: "frontend", description: "Ek simple aur khoobsurat weather app jo real-time weather information dikhata hai.", imageUrl: "me3.png", projectUrl: "https://yousifbhutta.github.io/weather/" },
    { title: "Calculator", category: "frontend", description: "Ek feature-rich calculator jo basic se advance operations perform kar sakta hai.", imageUrl: "me4.jpg", projectUrl: "https://yousifbhutta.github.io/Calculator/" },
    { title: "Front-Page", category: "frontend", description: "Ek responsive aur interactive landing page design.", imageUrl: "me6.png", projectUrl: "https://yousifbhutta.github.io/LandingPage/" },
    { title: "API", category: "in-progress", description: "Ek custom RESTful API jo alag alag web applications ke liye data serve karti hai.", imageUrl: "https://placehold.co/600x400/292524/ffffff?text=API+Project", projectUrl: "#" },
    { title: "Chat-app", category: "in-progress", description: "Ek real-time chat application jisme multi-user conversations ki ja sakti hain.", imageUrl: "https://placehold.co/600x400/292524/ffffff?text=Chat+App", projectUrl: "#" },
    { title: "Tranding-App", category: "in-progress", description: "Ek app jo social media par trending topics ko track aur analyze karti hai.", imageUrl: "https://placehold.co/600x400/292524/ffffff?text=Trending+App", projectUrl: "#" },
    { title: "Game", category: "in-progress", description: "Ek fun aur addictive game jo user ki problem-solving skills ko improve karti hai.", imageUrl: "https://placehold.co/600x400/292524/ffffff?text=Game", projectUrl: "#" },
    { title: "Location-App", category: "in-progress", description: "Ek app jo user ko alag alag jagahon ko explore karne mein madad karti hai.", imageUrl: "https://placehold.co/600x400/292524/ffffff?text=Location+App", projectUrl: "#" },
    { title: "E-Commerce", category: "in-progress", description: "Ek online store jahan users products browse, khareed, aur unhe track kar sakte hain.", imageUrl: "https://placehold.co/600x400/292524/ffffff?text=E-Commerce+Site", projectUrl: "#" },

  ],
  frontend: [
    { title: "Portfolio", category: "frontend", description: "This is the demo portfolio you are currently viewing. It features a modern design, a responsive layout, and animated sections.", imageUrl: "me1.jpg", projectUrl: "https://yousifbhutta.github.io/" },
    { title: "MusicPlayer", category: "frontend", description: "Ek responsive front-end music player jo user ko audio controls aur playlist ke sath interactive experience deta hai.", imageUrl: "me7.jpg", projectUrl: "https://yousifbhutta.github.io/MusicPlayer" },
       { title: "Weather-App", category: "frontend", description: "Ek simple aur khoobsurat weather app jo real-time weather information dikhata hai.", imageUrl: "me3.png", projectUrl: "https://yousifbhutta.github.io/weather/" },
    { title: "Calculator", category: "frontend", description: "Ek feature-rich calculator jo basic se advance operations perform kar sakta hai.", imageUrl: "me4.jpg", projectUrl: "https://yousifbhutta.github.io/Calculator/" },
    { title: "Front-Page", category: "frontend", description: "Ek responsive aur interactive landing page design.", imageUrl: "me6.png", projectUrl: "https://yousifbhutta.github.io/LandingPage/" },
    { title: "Blog Website", category: "frontend", description: "Ek blog website jahan users articles publish aur read kar sakte hain.", imageUrl: "me5.jpg", projectUrl: "https://yousifbhutta.github.io/PostBazzar/" }
  ],
  inProgress: [
 { title: "Task-Manager", category: "in-progress", description: "Ek modern task manager application jo user ko apne kaamon ko organize aur track karne mein madad karta hai.", imageUrl: "me2.png", projectUrl: "#" },
    { title: "API", category: "in-progress", description: "Ek custom RESTful API jo alag alag web applications ke liye data serve karti hai.", imageUrl: "https://placehold.co/600x400/292524/ffffff?text=API+Project", projectUrl: "#" },
    { title: "Chat-app", category: "in-progress", description: "Ek real-time chat application jisme multi-user conversations ki ja sakti hain.", imageUrl: "https://placehold.co/600x400/292524/ffffff?text=Chat+App", projectUrl: "#" },
    { title: "Tranding-App", category: "in-progress", description: "Ek app jo social media par trending topics ko track aur analyze karti hai.", imageUrl: "https://placehold.co/600x400/292524/ffffff?text=Trending+App", projectUrl: "#" },
    { title: "Game", category: "in-progress", description: "Ek fun aur addictive game jo user ki problem-solving skills ko improve karti hai.", imageUrl: "https://placehold.co/600x400/292524/ffffff?text=Game", projectUrl: "#" },
    { title: "Location-App", category: "in-progress", description: "Ek app jo user ko alag alag jagahon ko explore karne mein madad karti hai.", imageUrl: "https://placehold.co/600x400/292524/ffffff?text=Location+App", projectUrl: "#" },
    { title: "E-Commerce", category: "in-progress", description: "Ek online store jahan users products browse, khareed, aur unhe track kar sakte hain.", imageUrl: "https://placehold.co/600x400/292524/ffffff?text=E-Commerce+Site", projectUrl: "#" }
  ]
};

// Education data (Aap yahan apni educational details edit kar sakte hain)
const educationData = [
  {
    degree: "Bachelor Science in Information Technology (BSIT)",
    institution: "University of Southern Punjab Multan",
    year: "2022",
    description: "Graduated in 2022 with a BS in Information Technology, with a strong focus on web development, database management, networking, and software engineering principles. Gained hands-on experience in building web applications, understanding IT infrastructure, and applying modern programming practices..",
  },
  {
    degree: "FSC (Pre-Engineering)",
    institution: "Board of Intermediate and Secondary Education Multan",
    year: "2018",
    description: "Completed FSC (Pre-Engineering) in 2018 with a strong focus on Mathematics, Physics, and Chemistry. This degree helped me build a solid foundation in analytical and problem-solving skills, which later supported my journey into Information Technology and software development."
  },
  {
    degree: "Matriculation (Science)",
    institution: "Board of Intermediate and Secondary Education Multan",
    year: "2016",
    description: "Completed my secondary school education in 2016 with high marks in science subjects."
  }
];

const certificationData = [
  {
    name: "Google Front-End Development Professional Certificate",
    platform: "Coursera",
    year: "2023",
    certificateUrl: "https://storage.googleapis.com/gwm-public-assets/gfgf.PNG"
  },
  {
    name: "React Developer",
    platform: "W3Schools",
    year: "2023",
    certificateUrl: "https://storage.googleapis.com/gwm-public-assets/gfgf.PNG"
  }
];

const achievementsData = [
  {
    title: "Gold Medalist",
    year: "2022",
    description: "Awarded for outstanding academic performance in Bachelor of Science in Information Technology.",
    imageUrl: "https://storage.googleapis.com/gwm-public-assets/Cafdgfd.PNG"
  },
  {
    title: "Top Coder Award",
    year: "2021",
    description: "Recognized as the top performer in a university-wide coding competition.",
    imageUrl: "https://storage.googleapis.com/gwm-public-assets/Cafdgfd.PNG"
  }
];

const skillsData = [
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 75 },
  { name: "JavaScript", percent: 80 },
  { name: "PHP", percent: 80 },
  { name: "React", percent: 90 },
  { name: "Node.js", percent: 65 },
  { name: "SQL", percent: 90 },
];

const SkillBar = ({ name, percent }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-gray-300">{percent}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-amber-400 h-2.5 rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

// Counter component for animation effect
const Counter = ({ from, to, duration }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const start = Date.now();
      const end = start + duration;

      const step = () => {
        const now = Date.now();
        const progress = Math.min((now - start) / duration, 1);
        const newCount = Math.floor(progress * (to - from) + from);
        setCount(newCount);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(to);
        }
      };

      requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
};

// Project Modal Component
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // Live Task-Manager component ke liye conditional rendering
  const isTaskManager = project.title === "Task-Manager";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-gray-900 rounded-xl p-8 max-w-3xl w-full relative transform transition-all duration-300 scale-95 md:scale-100">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <X size={24} />
        </button>
        <h3 className="text-3xl font-bold text-center text-amber-400 mb-6">{project.title}</h3>

        {/* Yahan conditional rendering ho rahi hai */}
        {isTaskManager ? (
          // Agar Task-Manager hai to TaskApp component ko show karein
          <TaskApp />
        ) : (
          // Warna baqi projects ke liye yeh content show karein
          <>
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto rounded-lg shadow-lg mb-6"
            />
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.description}</p>
            <a 
              href={project.projectUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-amber-400 text-gray-950 rounded-lg font-bold shadow-lg hover:bg-amber-500 transition-colors duration-300"
            >
              View Project
              <Eye size={20} className="ml-2" />
            </a>
          </>
        )}
        <button
          onClick={onClose}
          className="mt-4 inline-flex items-center justify-center w-full px-6 py-3 bg-gray-700 text-white rounded-lg font-bold shadow-lg hover:bg-gray-600 transition-colors duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};



const App = () => {
  const [activeSection, setActiveSection] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isCertificationsOpen, setIsCertificationsOpen] = useState(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeSection === 'all'
    ? projectData.all
    : activeSection === 'frontend'
    ? projectData.frontend
    : projectData.inProgress;

  const nextSkill = () => {
    setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skillsData.length);
  };

  const prevSkill = () => {
    setCurrentSkillIndex((prevIndex) => (prevIndex - 1 + skillsData.length) % skillsData.length);
  };

  const handleImageClick = (url) => {
    setSelectedImageUrl(url);
    setIsModalOpen(true);
  };
  
  // New function to handle project view button click
  const handleViewProject = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  return (
    <div className="bg-gray-950 text-white font-sans">
      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 bg-gray-950 bg-opacity-90 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-amber-400">Muhammad Yousif Bhutta</a>
          <div className="hidden md:flex space-x-8 text-lg">
            <a href="#home" className="hover:text-amber-400 transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-amber-400 transition-colors duration-300">About</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors duration-300">Skills</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors duration-300">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-amber-400">
              <Menu size={28} />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 text-amber-400">
              <X size={28} />
            </button>
            <div className="flex flex-col space-y-4 mt-12">
              <a onClick={() => setIsMenuOpen(false)} href="#home" className="text-white hover:text-amber-400 transition-colors duration-300 text-lg">Home</a>
              <a onClick={() => setIsMenuOpen(false)} href="#about" className="text-white hover:text-amber-400 transition-colors duration-300 text-lg">About</a>
              <a onClick={() => setIsMenuOpen(false)} href="#skills" className="text-white hover:text-amber-400 transition-colors duration-300 text-lg">Skills</a>
              <a onClick={() => setIsMenuOpen(false)} href="#contact" className="text-white hover:text-amber-400 transition-colors duration-300 text-lg">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="py-20 min-h-screen flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto">
            <img
              src="me.jpeg"
              alt="Profile Picture"
              className="mx-auto rounded-full w-40 h-40 object-cover mb-6 border-4 border-amber-400"
            />
            <p className="text-gray-300 text-lg mb-2">Hi, I'm Muhammad Yousif Bhutta</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-amber-400">
              I'm a Full Stack Developer
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-gray-300">
              skilled in HTML, CSS,PHP, JavaScript and React. I love creating responsive, user-friendly websites and continuously learning new web technologies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#contact" className="px-6 py-3 bg-amber-400 text-gray-950 rounded-full font-bold shadow-lg hover:bg-amber-500 transition-colors duration-300">
                Hire Me
              </a>
              <a
                href="/my-resume.pdf"
                download="Yousif-Resume"
                className="px-6 py-3 border border-amber-400 text-amber-400 rounded-full font-bold shadow-lg hover:bg-amber-400 hover:text-gray-950 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
              <a
                href="/YousifGDPortfolio.pdf"
                download="Yousif-GDPortfolio"
                className="px-6 py-3 border border-amber-400 text-amber-400 rounded-full font-bold shadow-lg hover:bg-amber-400 hover:text-gray-950 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Download size={20} />
                <span>Download My Graphics Portfolio</span>
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-xl bg-gray-800 shadow-md">
              <h3 className="text-3xl font-bold text-amber-400">
                <Counter from={0} to={14} duration={2000} />+
              </h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800 shadow-md">
              <h3 className="text-3xl font-bold text-amber-400">
                <Counter from={0} to={210} duration={2000} />+
              </h3>
              <p className="text-gray-300">Happy Users</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800 shadow-md">
              <h3 className="text-3xl font-bold text-amber-400">
                <Counter from={0} to={2} duration={2000} />
              </h3>
              <p className="text-gray-300">Awards Won</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800 shadow-md">
              <h3 className="text-3xl font-bold text-amber-400">
                <Counter from={0} to={1} duration={2000} />
              </h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-4xl font-bold text-center text-amber-400 mb-4">About Me</h2>
            <p className="text-gray-300 text-center text-lg mb-12">I am Muhammad Yousif Bhutta, a Full Stack web developer...</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="text-gray-300 space-y-6">
                <p>
                  I'm <span className="text-amber-400">Muhammad Yousif Bhutta</span>, a Full Stack web developer with expertise in <span className="text-amber-400">HTML, CSS,PHP, JavaScript, React</span>. I create responsive, clean and fast websites using modern tools and best coding practices. From building static pages to dynamic web apps, I focus on user-friendly interfaces and smooth functionality.
                </p>
                <p>
                  I'm also skilled at debugging and fixing layout or code errors efficiently. Whether it’s solving issues or bringing a design to life, I love turning ideas into polished, real-world solutions. I'm always learning and improving to stay ahead in the evolving tech world.
                </p>
                <p className="text-amber-400 font-bold">
                  My goal is to build clean, fast, and accessible websites that solve real-world problems.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-md space-y-6">
                {/* Education Section */}
                <button 
                  onClick={() => setIsEducationOpen(!isEducationOpen)} 
                  className="flex items-center justify-between w-full text-left focus:outline-none"
                >
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                  {isEducationOpen ? <ChevronUp size={24} className="text-amber-400" /> : <ChevronDown size={24} className="text-amber-400" />}
                </button>
                {isEducationOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-6"
                  >
                    {educationData.map((edu, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-950 rounded-full flex items-center justify-center text-xl text-amber-400">
                          &#x2325;
                        </div>
                        <div>
                          <h4 className="font-bold text-xl text-amber-400">{edu.degree}</h4>
                          <p className="text-gray-400">{edu.institution}, {edu.year}</p>
                          <p className="text-gray-300 text-sm mt-1">{edu.description}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Certifications Section */}
                <button 
                  onClick={() => setIsCertificationsOpen(!isCertificationsOpen)} 
                  className="flex items-center justify-between w-full text-left focus:outline-none"
                >
                  <h3 className="text-2xl font-bold text-white">Certifications</h3>
                  {isCertificationsOpen ? <ChevronUp size={24} className="text-amber-400" /> : <ChevronDown size={24} className="text-amber-400" />}
                </button>
                {isCertificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-6"
                  >
                    {certificationData.map((cert, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-950 rounded-full flex items-center justify-center text-xl text-amber-400">
                          &#x2325;
                        </div>
                        <div>
                          <h4 className="font-bold text-xl text-amber-400">{cert.name}</h4>
                          <p className="text-gray-400">{cert.platform}, {cert.year}</p>
                          <button 
                            onClick={() => handleImageClick(cert.certificateUrl)}
                            className="mt-2 px-4 py-2 text-sm bg-amber-400 text-gray-950 rounded-full font-semibold hover:bg-amber-500 transition-colors duration-300"
                          >
                            View Certificate
                          </button>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
                
                {/* Achievements Section */}
                <button 
                  onClick={() => setIsAchievementsOpen(!isAchievementsOpen)} 
                  className="flex items-center justify-between w-full text-left focus:outline-none"
                >
                  <h3 className="text-2xl font-bold text-white">Achievements</h3>
                  {isAchievementsOpen ? <ChevronUp size={24} className="text-amber-400" /> : <ChevronDown size={24} className="text-amber-400" />}
                </button>
                {isAchievementsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-6"
                  >
                    {achievementsData.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-950 rounded-full flex items-center justify-center text-xl text-amber-400">
                          &#x2325;
                        </div>
                        <div>
                          <h4 className="font-bold text-xl text-amber-400">{achievement.title}</h4>
                          <p className="text-gray-400">{achievement.year}</p>
                          <p className="text-gray-300 text-sm mt-1">{achievement.description}</p>
                          {/* New button for achievements */}
                          <button 
                            onClick={() => handleImageClick(achievement.imageUrl)}
                            className="mt-2 px-4 py-2 text-sm bg-amber-400 text-gray-950 rounded-full font-semibold hover:bg-amber-500 transition-colors duration-300"
                          >
                            View Image
                          </button>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-4xl font-bold text-center text-amber-400 mb-4">Skills</h2>
            <p className="text-gray-300 text-center text-lg mb-12">
              A snapshot of my technical strengths.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button onClick={prevSkill} className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300">
                <ChevronLeft size={24} />
              </button>
              <div className="w-full max-w-md">
                <SkillBar name={skillsData[currentSkillIndex].name} percent={skillsData[currentSkillIndex].percent} />
              </div>
              <button onClick={nextSkill} className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300">
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Additional Skills Section */}
            <div className="mt-16 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">Additional Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-800 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg text-amber-400">Graphic Design</h4>
                  <p className="text-gray-300 text-sm mt-2">Canva, Figma, Posters, Social Media Creatives, Logos.</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg text-amber-400">Social Media Management</h4>
                  <p className="text-gray-300 text-sm mt-2">Content calendars, Campaigns, Basic analytics.</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg text-amber-400">Network Engineering</h4>
                  <p className="text-gray-300 text-sm mt-2">LAN/WAN setup, Troubleshooting, Cisco basics.</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg text-amber-400">Teaching Assistant</h4>
                  <p className="text-gray-300 text-sm mt-2">Course support, Lab assistance, Practical labs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-4xl font-bold text-center text-amber-400 mb-4">All Projects</h2>
            <div className="flex justify-center space-x-4 mb-8">
              <button 
                onClick={() => setActiveSection('all')} 
                className={`py-2 px-4 rounded-full font-semibold transition-colors duration-300 ${activeSection === 'all' ? 'bg-amber-400 text-gray-950' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveSection('frontend')} 
                className={`py-2 px-4 rounded-full font-semibold transition-colors duration-300 ${activeSection === 'frontend' ? 'bg-amber-400 text-gray-950' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
              >
                Frontend
              </button>
              <button 
                onClick={() => setActiveSection('inProgress')} 
                className={`py-2 px-4 rounded-full font-semibold transition-colors duration-300 ${activeSection === 'inProgress' ? 'bg-amber-400 text-gray-950' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
              >
                In progress
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-xl shadow-md text-center group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleViewProject(project)}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-4 capitalize">{project.category}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <Eye size={20} className="text-amber-400" />
                    <span className="text-amber-400 font-semibold">View Demo</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-4xl font-bold text-center text-amber-400 mb-4">Let’s Connect</h2>
            <p className="text-gray-300 text-center text-lg mb-12">
              If you feel I'm a good fit for your team or freelance project, don't hesitate to contact me.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Contact Me</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="sr-only">Your Name</label>
                    <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Your Email</label>
                    <input type="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Your Message</label>
                    <textarea id="message" rows="4" placeholder="Your Message" className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"></textarea>
                  </div>
                  <button type="submit" className="w-full px-6 py-3 bg-amber-400 text-gray-950 rounded-lg font-bold shadow-lg hover:bg-amber-500 transition-colors duration-300">
                    Send Message
                  </button>
                </form>
              </div>
              <div className="space-y-6 text-gray-300">
                <div className="flex items-center space-x-4">
                  <Mail size={24} className="text-amber-400" />
                  <span>muhammadyousifofficial@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone size={24} className="text-amber-400" />
                  <span>+923206745410</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Github size={24} className="text-amber-400" />
                  <span>https://github.com/YousifBhutta</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin size={24} className="text-amber-400" />
                  <span>https://www.linkedin.com/in/muhammadyousifbhutta</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificate/Achievement Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-xl p-8 max-w-2xl w-full relative">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <X size={24} />
              </button>
              <h3 className="text-3xl font-bold text-center text-amber-400 mb-6">Details</h3>
              <img
                src={selectedImageUrl}
                alt="Certificate or Achievement Image"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
        
        {/* Project Modal */}
        {isProjectModalOpen && (
          <ProjectModal project={selectedProject} onClose={() => setIsProjectModalOpen(false)} />
        )}
      </main>
      
      {/* Footer Section */}
      <footer className="py-8 bg-gray-950 border-t border-gray-800 text-center">
        <p className="text-gray-400 mb-4">
          &copy; {new Date().getFullYear()} Muhammad Yousif Bhutta. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/YousifBhutta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/muhammadyousifbhutta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
            <Linkedin size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
