# Rahul's Terminal Portfolio

An interactive terminal-style portfolio built with React + TypeScript + Vite +
Tailwind CSS. Visitors type commands into a fake shell to explore my background,
projects, experience, skills, and contact links.

## Commands

| Command | Description |
|---------|-------------|
| `help` | Show all available commands |
| `whoami` | Personal information |
| `myprojects` | List projects |
| `work` | Work experience |
| `certs` | Certifications |
| `edu` | Education |
| `skills` | Technical skills |
| `achievements` | Coding ratings, contest rankings, awards |
| `contributions` | Recent open-source activity |
| `contactme` | Contact information |
| `resume`, `linkedin`, `github`, `leetcode`, `codeforces`, `instagram` | Open external links |
| `clear` | Clear the terminal |
| `init` | Reprint the welcome banner |

Use the up/down arrow keys to navigate command history.

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # lint the codebase
```

## Project Structure

```
src/
  components/
    Terminal.tsx          # scrollback / command echo
    CommandLine.tsx       # input line + key handling
    TerminalProvider.tsx  # React context: history + command history
    Banner.tsx            # welcome banner
    ui/
      ExternalLink.tsx    # reusable external anchor
      Prompt.tsx          # the user@portfolio:~$ prompt
  data/
    profile.ts            # single source of truth: name, contacts, URLs
    banner.ts             # ASCII banner text
    projects.tsx, experience.tsx, education.tsx,
    certifications.tsx, skills.tsx, about.tsx,
    contact.tsx, contributions.tsx, commands.tsx, openNewWindow.tsx
  lib/
    constants.ts          # username, linux command list
    isValidCommand.ts     # shared command validation
  utils/
    commands.ts           # the single command registry
  hooks/useTerminal.ts    # context accessor hook
  types/index.ts          # shared types
```

## Updating Content

- **Personal info / links** — edit `src/data/profile.ts` (one place).
- **Add a command** — add an entry to the registry in `src/utils/commands.ts`;
  it appears in `help` automatically.
- **Section content** — edit the matching file in `src/data/`.
