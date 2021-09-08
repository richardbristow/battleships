import React, { useState, useEffect, useCallback, useRef } from 'react';

import typingDelayTimer from '../typingDelayTimer';

const TextTyper = ({
  characterDelay,
  children,
  nextBlockDelayTimer,
  startTypingDelay,
}) => {
  const [text, setText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const {
    props: { children: childToType },
  } = children;
  const charDelayTimerRef = useRef(null);
  const startTypingDelayTimerRef = useRef(null);

  useEffect(() => () => clearTimeout(startTypingDelayTimerRef.current));

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
        nextBlockDelayTimer();
        setIsTyping(false);
      }
    },
    [characterDelay, currentCharIndex, nextBlockDelayTimer, startTypingDelay]
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
