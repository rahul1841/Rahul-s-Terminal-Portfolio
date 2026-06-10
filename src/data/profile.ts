// Single source of truth for all personal / contact information.
// Edit values here once; every command and section reads from this object.

export interface ProfileLinks {
  linkedIn: string;
  github: string;
  instagram: string;
  leetcode: string;
  codeforces: string;
  resume: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  githubUsername: string;
  summary: string;
  links: ProfileLinks;
}

export const profile: Profile = {
  name: "Rahul Kumar",
  title: "Software Engineer | AI Systems",
  location: "Bengaluru, India",
  email: "rahul2004kumar14@gmail.com",
  phone: "+91-6005435690",
  githubUsername: "rahul1841",
  summary:
    "Software engineer focused on AI systems and agent platforms, with strong full-stack and DevOps foundations. I build multi-tenant agent orchestration, RAG pipelines, and high-performance web applications.",
  links: {
    linkedIn: "https://www.linkedin.com/in/rahul-kumar-716045207/",
    github: "https://github.com/rahul1841",
    instagram: "https://www.instagram.com/officialrahulsamyal/",
    leetcode: "https://leetcode.com/u/Corporate_Majdoor__/",
    codeforces: "https://codeforces.com/profile/Kalu---",
    resume:
      "https://drive.google.com/file/d/11u9ldjSP0WIFXEqw2qgle76tHJr3UvtP/view?usp=sharing",
  },
};
