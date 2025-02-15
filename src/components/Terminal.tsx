// // import React from 'react';
// // import { HistoryItem } from '../types';

// // interface TerminalProps {
// //   history: HistoryItem[];
// // }

// // export const Terminal: React.FC<TerminalProps> = ({ history }) => {
// //   return (
// //     <div className="mb-4">
// //       {history.map((item, index) => (
// //         <div key={index} className="mb-2">
// //           {item.type === 'command' && (
// //             <div className="flex">
// //               <span className="text-blue-500">visitor@portfolio</span>
// //               <span className="text-white">:</span>
// //               <span className="text-purple-500">~$</span>
// //               <span className="ml-2">{item.content}</span>
// //             </div>
// //           )}
// //           {item.type === 'response' && (
// //             <div className="whitespace-pre-wrap">{item.content}</div>
// //           )}
// //           {item.type === 'error' && (
// //             <div className="text-red-500">{item.content}</div>
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// import React, { useRef, useEffect } from 'react';
// import { HistoryItem } from '../types';

// interface TerminalProps {
//   history: HistoryItem[];
// }

// export const Terminal: React.FC<TerminalProps> = ({ history }) => {
//   const terminalEndRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (terminalEndRef.current) {
//       terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [history]);

//   return (
//     <div className="mb-4">
//       {history.map((item, index) => (
//         <div key={index} className="mb-2">
//           {item.type === 'command' && (
//             <div className="flex">
//               <span className="text-blue-500">visitor@portfolio</span>
//               <span className="text-white">:</span>
//               <span className="text-purple-500">~$</span>
//               <span className="ml-2">{item.content}</span>
//             </div>
//           )}
//           {item.type === 'response' && (
//             <div className="whitespace-pre-wrap">{item.content}</div>
//           )}
//           {item.type === 'error' && (
//             <div className="text-red-500">{item.content}</div>
//           )}
//         </div>
//       ))}
//       <div ref={terminalEndRef} />
//     </div>
//   );
// };


import React, { useRef, useEffect } from 'react';
import { HistoryItem } from '../types';
import { commands } from '../utils/commands';

interface TerminalProps {
  history: HistoryItem[];
  userIpAddress: string;
}

export const Terminal: React.FC<TerminalProps> = ({ history, userIpAddress }) => {
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const isValidCommand = (command: string) => {
    const trimmedCommand = command.trim().toLowerCase();
    return trimmedCommand === '' || trimmedCommand === 'clear' || commands[trimmedCommand] !== undefined;
  };

  return (
    <div className="mb-8">
      {history.map((item, index) => (
        <div key={index} className="mb-2">
          {item.type === 'command' && (
            <div className="flex">
              <span className="text-purple-400">{userIpAddress}@portfolio</span>
              <span className="text-purple-400">:</span>
              <span className="text-purple-400">~$</span>
              <span className={`ml-3 ${typeof item.content === 'string' && isValidCommand(item.content) ? 'text-green-500' : 'text-red-500'}`}>{item.content}</span>
            </div>
          )}
          {item.type === 'response' && (
            <div className="whitespace-pre-line">{item.content}</div> 
          )}
          {item.type === 'error' && (
            <div className="text-gray-400 whitespace-pre-line">{item.content}</div>  
            
          )}
        </div>
      ))}
      <div ref={terminalEndRef} />
    </div>
  );
};
