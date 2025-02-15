import React from 'react';

interface SkillData {
  title: string;
  skills: string[];
}

const skillData: SkillData[] = [
  {
    title: "Programming Languages",
    skills: ["C++", "JavaScript", "Python", "C#"]
  },
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js", "TypeScript", "Streamlit", "Next.js", "React Hooks"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL", "FastApi", "LangChain", "Flask", "ASP.NET Core"]
  },
  {
    title: "DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "Prometheus", "Grafana"]
  },
  {
    title: "Miscellaneous",
    skills: ["Git", "Github", "Vercel", "Netlify", "Cloudinary"]
  }
];


export const renderSkills = (): JSX.Element => {
    return (
      <div>
        <br />
        <ul>
          {skillData.map((skill, index) => (
            <li key={index}>
              - {skill.title} : {skill.skills.join(', ')}
            </li>
          ))}
        </ul>
        <br />
      </div>
    );
  };