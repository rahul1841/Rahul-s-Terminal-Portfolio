// data/educationData.ts

export interface Education {
    id : number;
    institution: string;
    degree: string;
    date: string;
    grade: string;
    
  }
  
  export const education: Education[] = [
    {
      id : 1,
      institution: "GL Bajaj Institute of Technology and Management",
      degree: "Bachelor of Technology - BTech, Information Technology",
      date: "2021 - 2025",
      grade: "Aggregate CGPA: 7.8 (till 7th Semester)",
    },
    { 
      id : 2,
      institution: "Kendriya Vidyalaya Hiranagar",
      degree: "High School",
      date: "2021 batch",
      grade: "10th grade percentage: 86.4% \n12th grade percentage: 86.2%",
    },
    // Add more education entries as needed
  ];

  export const renderEducation = (education: Education[]): JSX.Element => {
    const formattedEducation = education.map((edu, index) => (
  `${edu.institution}
${edu.degree}
${edu.date}
${edu.grade}
${index !== education.length - 1 ? '\n--------------------------------------------------------------\n' : ''}`
    )).join('\n');
  
    return (
      <pre>
        <code>
          <br />
          {formattedEducation}
          <br />
        </code>
      </pre>
    );
  };