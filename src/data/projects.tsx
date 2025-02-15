import React from 'react';

// data/projectData.ts

export interface FrontendProject {
  title: string;
  description: string;
  technologies: string[];
  githubRepo: string;
  liveLink: string;
}

export interface BackendProject {
  title: string;
  description: string;
  technologies: string[];
  githubRepo: string;
}

export interface FullStackProject {
  title: string;
  description: string;
  achievements: string[];
  technologies: string[];
  githubRepo: string;
  liveLink: string;
}

export interface OtherProject {
  title: string;
  description: string;
  note?: string; // Added a note field
}

export interface ProjectData {
  frontendProjects: FrontendProject[];
  BackendProjects: BackendProject[];
  fullStackProjects: FullStackProject[];
  otherProjects: OtherProject[];
}

export const projects: ProjectData = {
  frontendProjects: [
    {
      title: 'VaultX',
      description:
        'Developed a blockchain-based web wallet (Web3) to create different Solana and Ethereum wallets using a mnemonic phrase. The project utilizes React.js, CSS, the BIP39 library, JavaScript, Solana, and Ethereum to create wallets',
      technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'BIP39 library', 'Web3'],
      githubRepo: 'https://github.com/rahul1841/VaultX',
      liveLink: 'https://vault-x-brown.vercel.app/',
    },
    {
      title: 'Quizify',
      description:
        'Developed Quizify a dynamic quiz generator website where users can select a topic, number of questions, and difficulty level to generate a quiz, and view their score at the end. The project utilizes the Google Gemini API to create quizzes based on the difficulty selected by the user.',
      technologies: ['React.js', 'Tailwind CSS', 'Google Gemini API'],
      githubRepo: 'https://github.com/rahul1841/QuizGenerator',
      liveLink: 'https://quiz-generator-lilac.vercel.app/',
    }
  ],
  BackendProjects: [
    {
      title: 'PdfAi',
      description:
        'Developed a Generative AI chatbot using OpenAI and LangChain for PDF interaction and analysis. Built and deployed a Streamlit-based web app enabling real-time engagement with generative AI. Designed a scalable architecture integrating LangChain and OpenAI for document collaboration.',
      technologies: ['Python', 'streamlit', 'LangChain', 'OpenAI.'],
      githubRepo: 'https://github.com/rahul1841/pdfai',
    },
    {
      title: 'Basic-Port-Scanner',
      description:
        'Developed a custom port scanner using Python, leveraging the Shodan InternetDB API to retrieve detailed information on IPs, including open ports, vulnerabilities, and platform data. Implemented robust error handling and user input validation, ensuring accurate IP resolution and graceful handling of unresponsive hosts or incomplete data.',
      technologies: ['React.js', 'Tailwind CSS', 'Google Gemini API'],
      githubRepo: 'https://github.com/rahul1841/Basic-Port-Scanner',
    }
  ],
  fullStackProjects: [
    {
      title: 'EduGlow',
      description:
        'Developed a full-stack e-learning platform, enabling educators to create, upload, and sell courses, driving a 40% increase in enrollments. Integrated secure payment processing and optimized file uploads. Showcased expertise in CI/CD, MongoDB, Express.js, Cloudinary, React.js, Nodemailer, Node.js, and various npm libraries. Effectively managed project tasks, ensuring smooth and timely delivery.',
      achievements: [
        'Empowered educators to curate, upload, and sell courses, leading to a remarkable 40% increase in course enrollment.',
        'Implemented robust secure payment processing and streamlined file uploads.',
      ],
      technologies: ['CI/CD', 'MongoDB', 'Express.js', 'Cloudinary', 'React.js', 'Nodemailer', 'Node.js'],
      githubRepo: 'https://github.com/rahul1841/EduGlow',
      liveLink: 'https://edu-glow.vercel.app/',
    },
  ],
  otherProjects: [
    {
      title: 'Other Exciting and Innovative Projects',
      description:
        'I have a number of other exciting and innovative projects showcased on my GitHub profile that I made during my learning journey, awaiting your exploration! Feel free to visit my GitHub at https://github.com/rahul1841/ to delve deeper into my work.',
      note: 'Note: The following is just a glimpse of my projects. Explore more on my GitHub.',
    },
  ],
};

const renderTechnologies = (technologies: string[]) => {
  return technologies.map((tech, index) => <li key={index}>- {tech}</li>);
};

const renderSingleProject = (singleProject: FrontendProject | FullStackProject | BackendProject) => {
  const { title, description, technologies, githubRepo } = singleProject;

  return (
    <div key={title} className="mb-4">
      <h3>{title}</h3>
      <br />
      <p>{description}</p>
      <br />
      <p>Technologies:</p>
      <ul>{renderTechnologies(technologies)}</ul>
      <br />
      {'liveLink' in singleProject && singleProject.liveLink && (
        <p>
          Live Link: <a href={singleProject.liveLink} target="_blank" rel="noopener noreferrer" className="text-custom-blue hover:text-custom-skyblue">{singleProject.liveLink}</a>
        </p>
      )}
      <p>
        GitHub Repo: <a href={githubRepo} target="_blank" rel="noopener noreferrer" className="text-custom-blue hover:text-custom-skyblue">{githubRepo}</a>
      </p>
      <div className="my-4">
        <div>---------------------------------------------------------------</div>
      </div>
    </div>
  );
};

export const renderProject = (project: ProjectData) => {
  return (
    <div>
      <h2>⚪ FULL STACK PROJECTS: </h2>
      <br />
      {project.fullStackProjects.map((fullStackProject) => renderSingleProject(fullStackProject))}
      <h2>⚪ FRONTEND PROJECTS: </h2>
      <br />
      {project.frontendProjects.map((frontendProject) => renderSingleProject(frontendProject))}
      <h2>⚪ BACKEND PROJECTS: </h2>
      <br />
      {project.BackendProjects.map((backendProject) => renderSingleProject(backendProject))}
      <p>
        Note: I have a number of other exciting and innovative projects showcased on my GitHub profile that I made during my learning journey, awaiting your exploration! Feel free to visit my GitHub at <a href="https://github.com/rahul1841/" target="_blank" rel="noopener noreferrer" className="text-custom-blue hover:text-custom-skyblue">https://github.com/rahul1841/</a> to delve deeper into my work.
      </p>
    </div>
  );
};