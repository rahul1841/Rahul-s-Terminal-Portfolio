import React from 'react';

const Init = (): JSX.Element => {
  return (
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
  );
};

export default Init;