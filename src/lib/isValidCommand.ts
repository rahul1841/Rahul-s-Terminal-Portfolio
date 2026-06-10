import { commands } from "../utils/commands";

// A command is "valid" if it's empty (nothing typed yet) or exists in the
// single command registry. Shared by the input line and the scrollback so
// the green/red colouring stays consistent.
export const isValidCommand = (input: string): boolean => {
  const trimmed = input.trim().toLowerCase();
  return trimmed === "" || commands[trimmed] !== undefined;
};
