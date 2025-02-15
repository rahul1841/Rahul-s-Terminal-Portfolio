

import React from 'react';

export type HistoryItemType = 'command' | 'response' | 'error';

export interface HistoryItem {
  type: HistoryItemType;
  content: string | JSX.Element;
}

export interface Command {
  description: string;
  execute: () => JSX.Element;
}