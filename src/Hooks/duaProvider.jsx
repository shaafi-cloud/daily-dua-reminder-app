import React, { createContext } from 'react';
import useDua from './useDua';

export const DuaContext = createContext();

export const DuaProvider = ({ children }) => {
  const duaValue = useDua();

  return (
    <DuaContext.Provider value={duaValue}>
      {children}
    </DuaContext.Provider>
  );
};
