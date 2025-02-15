
import React from "react";
import '../index.css'; 

export interface AboutData {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
  instagram: string;
  leetcode: string;
  skills: string[];
  summary: string;
}

export const about: AboutData = {
  name: "Rahul Kumar",
  location: "Delhi, India",
  email: "rahul2004kumar14@gmail.com",
  phone: "+91-6005435690",
  linkedIn: " https://www.linkedin.com/in/rahul-kumar-716045207/",
  github: "https://github.com/rahul1841",
  instagram: "https://www.instagram.com/officialrahulsamyal/",
  leetcode: "https://leetcode.com/u/rahul2004kumar14/",
  skills: [
    "Programming Languages: C++, JavaScript, Python, C#.",
    "Frontend: HTML5, CSS3, Tailwind CSS, JavaScript, React.js, TypeScript, Streamlit, Next.js, React Hooks.",
    "Backend: Node.js, Express.js, REST APIs, MongoDB, PostgreSQL, FastApi, LangChain, Flask, ASP.NET Core.",
    "DevOps : Docker, Kubernetes, AWS, Prometheus,Grafana.",
    "Miscellenous : Git, Github, Vercel, Netlify, Cloudinary."
  ],
  summary: "Enthusiastic web developer skilled in front-end, back-end, and DevOps technologies. Committed to building responsive, user-friendly, and high-performance websites.",
};

export const renderAbout = (about: AboutData): JSX.Element => {
  return (
    <div>
      <br />
      <p>Name: {about.name}</p>
      <br />
      <p>Location: {about.location}</p>
      <p>Email: <a href={`mailto:${about.email}`} target="_blank" rel="noopener noreferrer" className="text-custom-blue hover:text-custom-skyblue">{about.email}</a></p>
      <p>Phone: <a href={`tel:${about.phone}`} target="_blank" rel="noopener noreferrer" className="text-custom-blue hover:text-custom-skyblue">{about.phone}</a></p>
      <br />
      <p>Skills:</p>
      <ul>
        {about.skills.map((skill, index) => (
          <li key={index}>- {skill}</li>
        ))}
      </ul>
      <br />
      <p>Summary:</p>
      <p>- {about.summary}</p>
      <br />
      <p>Connect with Me:</p>
      <br />
      <ul>
        <li>- LinkedIn: <a href={about.linkedIn} target="_blank" rel="noopener noreferrer" className="text-custom-blue hover:text-custom-skyblue">{about.linkedIn}</a></li>
        <li>- GitHub: <a href={about.github} target="_blank" rel="noopener noreferrer" className="text-custom-blue hover:text-custom-skyblue">{about.github}</a></li>
        <li>- Leetcode: <a href={about.leetcode} target="_blank" rel="noopener noreferrer" className="text-custom-blue hover:text-custom-skyblue">{about.leetcode}</a></li>
        <li>- Instagram: <a href={about.instagram} target="_blank" rel="noopener noreferrer" className="text-custom-blue hover:text-custom-skyblue">{about.instagram}</a></li>
      </ul>
      <br />
    </div>
  );
};