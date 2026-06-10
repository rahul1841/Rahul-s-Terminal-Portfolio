import { useState, useRef, useEffect } from "react";
import { Terminal } from "./components/Terminal";
import { CommandLine } from "./components/CommandLine";
import { Banner } from "./components/Banner";
import { useTerminal } from "./hooks/useTerminal";
import { TerminalProvider } from "./components/TerminalProvider";
import { commands } from "./utils/commands";
import { LINUX_COMMANDS, USERNAME } from "./lib/constants";
import { useIpAddress } from "./hooks/useIpAddress";

function AppContent() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { history, addToHistory, clearHistory } = useTerminal();
  const [inputValue, setInputValue] = useState("");
  const ip = useIpAddress();
  const user = ip || USERNAME;

  const handleCommand = (command: string) => {
    addToHistory({ type: "command", content: command });

    const trimmedCommand = command.trim().toLowerCase();
    const firstWord = trimmedCommand.split(" ")[0];

    // clear/init reset terminal state, so they're handled here rather than
    // through the registry's execute() (which can't touch React state).
    if (trimmedCommand === "clear" || trimmedCommand === "init") {
      clearHistory();
      setInputValue("");
      if (trimmedCommand === "init") {
        addToHistory({ type: "response", content: <Banner /> });
      }
      return;
    }

    const commandFound = commands[trimmedCommand];

    if (commandFound) {
      addToHistory({ type: "response", content: commandFound.execute() });
    } else if (LINUX_COMMANDS.includes(firstWord)) {
      addToHistory({
        type: "error",
        content:
          `shell : command not found : ${firstWord}. Try 'help' to get started` +
          `\n\nThis is not a real terminal and doesn't support Linux commands like 'cd', 'ls', or 'cat' as of now. It's designed for an interactive experience. If you have suggestions or just want to give any feedback, ping me on my socials. Just simply type 'contactme'.\n`,
      });
    } else if (trimmedCommand) {
      addToHistory({
        type: "error",
        content: `shell : command not found : ${trimmedCommand}. Try 'help' to get started\n`,
      });
    }

    setInputValue("");
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (terminalRef.current) {
      const lastElement = terminalRef.current.lastElementChild;
      lastElement?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [history]);

  return (
    <div
      className="h-screen w-full bg-black text-gray-400 p-4 font-mono overflow-hidden"
      onClick={handleTerminalClick}
    >
      <div ref={terminalRef} className="h-full w-full overflow-auto scroll-smooth">
        <div className="mb-4">
          <Banner />
        </div>
        <Terminal history={history} user={user} />
        <CommandLine
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSubmit={handleCommand}
          inputRef={inputRef}
          user={user}
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
