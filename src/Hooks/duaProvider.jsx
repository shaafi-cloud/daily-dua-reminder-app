import React, { createContext } from 'react';
import useDua from './useDua';

export  const DuaContext = createContext();

export  const DuaProvider = ({ children }) => {
  const dua = useDua();
  
  return (
    <DuaContext.Provider value={dua}>
      {children}
    </DuaContext.Provider>
  );
};
