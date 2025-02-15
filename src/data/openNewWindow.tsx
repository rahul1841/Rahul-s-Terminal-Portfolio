
import React from 'react';

let openedWindow: Window | null = null; // Store the reference to the opened window

export const openNewWindow = (url: string): JSX.Element => {
  // If a window is already open, check if it's closed
  if (openedWindow && !openedWindow.closed) {
    // If not closed, reuse the existing window
    openedWindow.location.replace(url);
    openedWindow.focus();
  } else {
    // If closed or no window is open, open a new window
    openedWindow = window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div>
      <br />
      <p>Opening in a new tab...</p>
      <p>
        Successfully opened{' '}
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-custom-blue hover:text-custom-skyblue">
          {url}
        </a>{' '}
        in a new tab.
        <br />
      </p>
    </div>
  );
};