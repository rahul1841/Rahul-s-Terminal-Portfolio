
export interface Experience {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
}

export const experience: Experience[] = [
  {
    id: 1,
    title: "SDE Intern",
    company: "Bombay Shaving Company",
    date: "April 2024 - June 2024",
    description:
      "Led the development of a **Customer Reviews Scraping Platform** using **FastApi** during 3-month internship. Built a scraping solution with **Playwright** to collect data weekly, processing over **5,000 reviews per month** from Amazon, Flipkart, and competitor platforms. Implemented **Airflow** to schedule and manage scraper tasks, reducing manual intervention by **90%** and ensuring consistent data updates. Integrated the **OpenAI API** for sentiment analysis, achieving **80% precision** in categorizing customer sentiment.",
  },
  {
    id: 2,
    title: "Open Source Developer",
    company: "GirlScript Summer of Code",
    date: "May 2024 - August 2024",
    description:
      "Actively contributed to open-source projects, collaborating with global teams. Led project initiatives, showcasing strong leadership.",
  },
  {
    id: 3,
    title: "SDE Intern",
    company: "Bombay Shaving Company",
    date: "Feb 2025 - Present",
    description:
      "Currently contributing to the backend development of the Turbo Insyt application using ASP.NET Core and PostgreSQL as the database.",
  },
  // Add more experience entries as needed
];

export const renderExperience = (experienceData: Experience[]): JSX.Element => {
  const formattedExperience = experienceData.map((exp, index) => (
    `${exp.title} ~ ${exp.company} | ${exp.date}
- ${exp.description}
${index !== experienceData.length - 1 ? '\n--------------------------------------------------------------\n' : ''}`
  )).join('\n');

  return (
    <pre style={{ whiteSpace: 'pre-wrap' }}>
      <code>
        <br />
        {formattedExperience}
        <br />
      </code>
    </pre>
  );
};