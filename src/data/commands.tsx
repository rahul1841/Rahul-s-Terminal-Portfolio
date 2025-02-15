
import React from 'react';

// data/commandsData.ts

export interface CommandData {
  command: string;
  category: string;
  response: string; // Simulating a terminal-like response
}

export const commandsData: CommandData[] = [
  { command: "help", category: "info", response: "Display available commands." },
  { command: "whoami", category: "info", response: "Display personal information." },
  { command: "certs", category: "info", response: "List certifications." },
  { command: "edu", category: "info", response: "Show educational background." },
  { command: "work", category: "info", response: "Display work experience." },
  { command: "myprojects", category: "info", response: "List worked-on projects." },
  { command: "contributions", category: "info", response: "List my recent open source contributions."},
  { command: "skills", category: "info", response: "Show skills." },
  { command: "resume", category: "info", response: "Get my resume." },
  { command : "linkedin", category: "info", response: "Connect with me on linkedin." },
  { command : "github", category: "info", response: "Check out my github." },
  { command : "instagram", category: "info", response: "Connect with me on Instagram." },
  { command: "leetcode", category: "info", response: "Check out my LeetCode." },
  { command: "clear", category: "info", response: "Clears up the terminal" },
  { command: "init", category: "info", response: "Initializes the terminal"},
  { command: "contactme", category: "info", response: "Show contact information." },
  // Add more commands as needed
];

export const renderHelp = (commandsData: CommandData[]): JSX.Element => {
  return (
    <div>
      <br />
      <h3>=== Terminal Help ===</h3>
      <br />
      <p>Terminal Features</p>
      <br />
      <ul>
        <li>1. Tab Completion:</li>
        <ul>
          <pre>   - Use tab to autocomplete commands and paths.</pre>
        </ul>
         <br />
        <li>2. Command History:</li>
        <ul>
          <pre>   - Use the up and down arrow keys to navigate through previous commands.</pre>
        </ul>
        <br />
        <li>3. Clear Screen:</li>
        <ul>
          <pre>   - Type 'clear' to clear the terminal screen.</pre>
        </ul>
         <br />
        <li>4. Help:</li>
        <ul>
          <pre>   - Type 'help' to display this help section.</pre>
        </ul>
        <br />
        <li>5. User Info:</li>
        <ul>
          <pre>   - The username before the @ symbol is the current user IP address.</pre>
        </ul>
      </ul>
      <br />
      <br />
      <p>Available Commands:</p>
      <br />
      <ul>
        {commandsData.map((command, index) => (
          <pre key={index}>
            - {command.command} ~ {command.response}
          </pre>
        ))}
      </ul>
      <br />
      <p>Enjoy exploring the terminal!</p>
      <br />
    </div>
  );
};