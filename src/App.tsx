

import React, { useState, useRef, useEffect } from 'react';
import { Terminal } from './components/Terminal';
import { CommandLine } from './components/CommandLine';
import { useTerminal } from './hooks/useTerminal';
import { TerminalProvider } from './components/TerminalProvider';
import { commands } from './utils/commands';

// Common Linux commands for error detection
const linuxCommands = [
  'ls', 'cd', 'pwd', 'mkdir', 'rm', 'cp', 'mv', 'cat', 'grep', 'chmod',
  'chown', 'sudo', 'apt', 'nano', 'vim', 'touch', 'echo', 'man', 'ssh'
];

function AppContent() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { history, addToHistory, clearHistory } = useTerminal();
  const [inputValue, setInputValue] = useState('');
  const [userIpAddress, setUserIpAddress] = useState('');

  const getIpAddress = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setUserIpAddress(data.ip);
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
  };

  useEffect(() => {
    getIpAddress();
  }, []);

  const handleCommand = (command: string) => {
    addToHistory({ type: 'command', content: command });

    const trimmedCommand = command.trim().toLowerCase();
    const firstWord = trimmedCommand.split(' ')[0];

    if (trimmedCommand === 'clear'|| trimmedCommand === 'init') {
      clearHistory();
      setInputValue('');
      if (trimmedCommand === 'init') {
        addToHistory({ type: 'response', content: commands['init'].execute() });
      }
      return;
    }


    const commandFound = commands[trimmedCommand];

    if (commandFound) {
      addToHistory({ type: 'response', content: commandFound.execute() });
    } else if (linuxCommands.includes(firstWord)) {
      addToHistory({ 
        type: 'error', 
        content: `
        shell : command not found : ${firstWord}. Try 'help' to get started`
        + 
            `\n\nThis is not a real terminal and doesn't support Linux commands like 'cd', 'ls', or 'cat' as of now. It's designed for an interactive experience. If you have suggestions or just want to give any feedback, ping me on my socials. Just simply type 'contactme'.\n`
      });
    } else if (trimmedCommand) {
      addToHistory({ 
        type: 'error', 
        content: `shell : command not found : ${trimmedCommand}. Try 'help' to get started\n`
      });
    }

    setInputValue('');
  };

const handleTerminalClick = () => {
  if (inputRef.current) {
    inputRef.current.focus();
  }
};

  useEffect(() => {
    if (terminalRef.current) {
      const lastElement = terminalRef.current.lastElementChild;
      if (lastElement) {
        lastElement.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  }, [history]);

  return (
    <div className="h-screen w-full bg-black text-gray-400 p-4 font-mono overflow-hidden"
               onClick={handleTerminalClick}>
      <div 
        ref={terminalRef}
        className="h-full w-full overflow-auto scroll-smooth">
        <div className="mb-4">
          <pre className="text-gray-400">
{`
██████   █████  ██   ██ ██    ██  ██           ██    ██ ██    ██ ██       ██  █████  ██████  
██   ██ ██   ██ ██   ██ ██    ██  ██           ██  ██   ██    ██ ██ ██ ██ ██ ██   ██ ██   ██  
██████  ███████ ███████ ██    ██  ██           ████     ██    ██ ██   █   ██ ███████ ██████    
██   ██ ██   ██ ██   ██ ██    ██  ██           ██  ██   ██    ██ ██       ██ ██   ██ ██   ██  
██   ██ ██   ██ ██   ██   ████    ███████      ██    ██   ████   ██       ██ ██   ██ ██    ██  

Welcome to my interactive terminal portfolio. 

For a list of commands type "help" and press enter.

`}
          </pre>
        </div>
        <Terminal history={history} userIpAddress={userIpAddress}  />
        <CommandLine 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSubmit={handleCommand}
          inputRef={inputRef}
          userIpAddress={userIpAddress}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <TerminalProvider>
      <AppContent />
    </TerminalProvider>
  );
}

export default App;
