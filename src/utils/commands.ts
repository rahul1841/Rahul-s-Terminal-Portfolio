
import { about, renderAbout } from "../data/about";
import { experience, renderExperience } from "../data/experience";
import { certifications, renderCertifications } from "../data/certifcations";
import { education, renderEducation } from "../data/education";
import { projects, renderProject } from "../data/projects";
import { commandsData, renderHelp } from "../data/commands";
import { renderSkills } from "../data/skills";
import { renderContact } from "../data/contact";
import Init from "../data/init"; 
import { openNewWindow } from "../data/openNewWindow";
import Contributions from "../data/contributions";
import React from "react";
import { useTerminal } from '../hooks/useTerminal';

export const commands: Record<string, { description: string; execute: () => JSX.Element | string }> = {
  whoami: { description: "Display personal information", execute: () => renderAbout(about) },
  myprojects: { description: "List projects", execute: () => renderProject(projects) },
  work: { description: "Show work experience", execute: () => renderExperience(experience) },
  certs: { description: "List certifications", execute: () => renderCertifications(certifications) },
  edu: { description: "Show education details", execute: () => renderEducation(education) },
  help: { description: "Show available commands", execute: () => renderHelp(commandsData) },
  // init: { description: "Initialize terminal", execute: () => Init() },
  init: { description: "Initialize terminal", execute: () => {
    const { clearHistory } = useTerminal();
    clearHistory();
    return Init();
  }},
  skills: { description: "Show technical skills", execute: () => renderSkills() },
  contactme: { description: "Show contact information", execute: () => renderContact() },
  linkedin: { description: "Open LinkedIn profile", execute: () => openNewWindow("https://www.linkedin.com/in/rahul-kumar-716045207/") },
  github: { description: "Open GitHub profile", execute: () => openNewWindow("https://github.com/rahul1841") },
  resume: { description: "Open resume", execute: () => openNewWindow("https://drive.google.com/file/d/11u9ldjSP0WIFXEqw2qgle76tHJr3UvtP/view?usp=sharing") },
  instagram: { description: "Open Instagram profile", execute: () => openNewWindow("https://www.instagram.com/officialrahulsamyal/") },
  leetcode: { description: "Open LeetCode profile", execute: () => openNewWindow("https://leetcode.com/u/rahul2004kumar14/") },
  contributions: { description: "List my recent open source contributions", execute: () => React.createElement(Contributions) },
};