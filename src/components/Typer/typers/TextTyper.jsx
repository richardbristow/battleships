import React, { useState, useEffect, useCallback, useRef } from 'react';

const TextTyper = ({
  characterDelay,
  children,
  startTypingDelay,
  handleNextBlock,
  nextBlockDelay,
}) => {
  const [text, setText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const {
    props: { children: childToType },
  } = children;
  const charDelayTimerRef = useRef(null);
  const startTypingDelayTimerRef = useRef(null);
  const nextBlockDelayTimerRef = useRef(null);

  const charTyper = useCallback(
    (stringToType) => {
      if (currentCharIndex < stringToType.length) {
        charDelayTimerRef.current = setTimeout(() => {
          setText((prevText) => prevText + stringToType[currentCharIndex]);
          setCurrentCharIndex(currentCharIndex + 1);
        }, characterDelay);
      } else {
        nextBlockDelayTimerRef.current = setTimeout(() => {
          handleNextBlock();
          setShowCursor(false);
        }, nextBlockDelay);
      }
    },
    [characterDelay, currentCharIndex, handleNextBlock, nextBlockDelay]
  );

  useEffect(() => {
    startTypingDelayTimerRef.current = setTimeout(
      () => {
        charTyper(childToType);
      },
      currentCharIndex === 0 ? startTypingDelay : 0
    );

    return () => {
      clearTimeout(charDelayTimerRef.current);
      clearTimeout(startTypingDelayTimerRef.current);
      clearTimeout(nextBlockDelayTimerRef.current);
    };
  }, [childToType, charTyper, startTypingDelay, currentCharIndex]);

  return React.cloneElement(children, {
    children: text,
    withCursor: showCursor,
    cursorBlink:
      !(currentCharIndex < childToType.length) || currentCharIndex === 0,
  });
};

export default TextTyper;
