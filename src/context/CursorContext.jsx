import React, { createContext, useContext, useState } from 'react';

const CursorContext = createContext({
  cursorText: '',
  cursorVariant: 'default',
  setCursor: () => {},
  resetCursor: () => {},
});

export const CursorProvider = ({ children }) => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');

  const setCursor = (text = '', variant = 'hover') => {
    setCursorText(text);
    setCursorVariant(variant);
  };

  const resetCursor = () => {
    setCursorText('');
    setCursorVariant('default');
  };

  return (
    <CursorContext.Provider value={{ cursorText, cursorVariant, setCursor, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
