import React, { useState, useEffect, useCallback, useRef } from 'react';

import typingDelayTimer from '../typingDelayTimer';

const TextTyper = ({
  characterDelay,
  children,
  startTypingDelay,
  handleNextBlock,
  nextBlockDelay,
}) => {
  const [text, setText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const {
    props: { children: childToType },
  } = children;
  const charDelayTimerRef = useRef(null);
  const startTypingDelayTimerRef = useRef(null);
  const nextBlockDelayTimerRef = useRef(null);

  useEffect(() => () => {
    clearTimeout(startTypingDelayTimerRef.current);
    clearTimeout(nextBlockDelayTimerRef.current);
  });

  const charTyper = useCallback(
    async (stringToType) => {
      if (currentCharIndex === 0) {
        startTypingDelayTimerRef.current = await typingDelayTimer(
          startTypingDelay
        );
      }
      if (currentCharIndex < stringToType.length) {
        charDelayTimerRef.current = setTimeout(() => {
          setText((prevText) => prevText + stringToType[currentCharIndex]);
          setCurrentCharIndex(currentCharIndex + 1);
        }, characterDelay);
      } else {
        nextBlockDelayTimerRef.current = setTimeout(() => {
          handleNextBlock();
          setIsTyping(false);
        }, nextBlockDelay);
      }
    },
    [
      characterDelay,
      currentCharIndex,
      handleNextBlock,
      nextBlockDelay,
      startTypingDelay,
    ]
  );

  useEffect(() => {
    charTyper(childToType);

    return () => clearTimeout(charDelayTimerRef.current);
  }, [childToType, charTyper]);

  return React.cloneElement(children, {
    children: text,
    withCursor: isTyping,
  });
};

export default TextTyper;
