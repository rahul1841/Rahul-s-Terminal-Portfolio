import React, { KeyboardEvent, useMemo } from 'react';
import { useTerminal } from '../hooks/useTerminal';
import { commands } from '../utils/commands';

interface CommandLineProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (command: string) => void;
  inputRef: React.RefObject<HTMLInputElement>; 
  userIpAddress: string; 
}

export const CommandLine: React.FC<CommandLineProps> = ({ value, onChange, onSubmit, inputRef, userIpAddress }) => {
  const { getPreviousCommand, getNextCommand } = useTerminal();

  const isValidCommand = useMemo(() => {
    const trimmedCommand = value.trim().toLowerCase();
    return trimmedCommand === '' || trimmedCommand === 'clear' || commands[trimmedCommand] !== undefined;
  }, [value]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        onSubmit(value);
        break;
      case 'ArrowUp':
        e.preventDefault();
        const prevCommand = getPreviousCommand();
        onChange({ target: { value: prevCommand } } as React.ChangeEvent<HTMLInputElement>);
        break;
      case 'ArrowDown':
        e.preventDefault();
        const nextCommand = getNextCommand();
        onChange({ target: { value: nextCommand } } as React.ChangeEvent<HTMLInputElement>);
        break;
      case 'Tab':
        e.preventDefault();
        if (value.trim().toLowerCase() === 'clear') {
          onSubmit('clear');
        }
        break;
    }
  };

  return (
    <div className="flex items-center">
      <span className="text-purple-400">{userIpAddress}@portfolio</span>
      <span className="text-purple-400">:</span>
      <span className="text-purple-400">~$</span>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        className={`flex-1 ml-2 bg-transparent outline-none border-none ${
          value.trim() === '' ? 'text-red-500' : isValidCommand ? 'text-green-500' : 'text-red-500'
        }`}
        autoFocus
      />
    </div>
  );
}
