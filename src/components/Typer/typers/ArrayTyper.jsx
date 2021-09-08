import React, { useState, useEffect, useCallback, useRef } from 'react';

import typingDelayTimer from '../typingDelayTimer';

const ArrayTyper = ({
  children,
  characterDelay,
  nextBlockDelayTimer,
  startTypingDelay,
}) => {
  const [text, setText] = useState([]);
  const [childrenIndex, setChildrenIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const charDelayTimerRef = useRef(null);
  const {
    props: { children: arrayToType },
  } = children;
  const startTypingDelayTimerRef = useRef(null);

  useEffect(() => () => clearTimeout(startTypingDelayTimerRef.current));

  const indexedCharTyper = useCallback(
    async (stringToType) => {
      if (currentCharIndex === 0 && childrenIndex === 0) {
        startTypingDelayTimerRef.current = await typingDelayTimer(
          startTypingDelay
        );
      }
      if (childrenIndex < arrayToType.length) {
        if (typeof stringToType === 'string') {
          if (currentCharIndex < stringToType.length) {
            charDelayTimerRef.current = setTimeout(() => {
              setText((prevText) => [
                ...prevText,
                stringToType[currentCharIndex],
              ]);
              setCurrentCharIndex(currentCharIndex + 1);
            }, characterDelay);
          } else {
            setCurrentCharIndex(0);
            setChildrenIndex((prevIndex) => prevIndex + 1);
          }
        } else if (React.isValidElement(stringToType)) {
          setText((prevText) => [...prevText, stringToType]);
          setChildrenIndex((prevIndex) => prevIndex + 1);
        } else {
          setChildrenIndex((prevIndex) => prevIndex + 1);
        }
      } else {
        nextBlockDelayTimer();
        setIsTyping(false);
      }
    },
    [
      arrayToType.length,
      characterDelay,
      childrenIndex,
      currentCharIndex,
      nextBlockDelayTimer,
      startTypingDelay,
    ]
  );

  useEffect(() => {
    indexedCharTyper(arrayToType[childrenIndex]);

    return () => clearTimeout(charDelayTimerRef.current);
  }, [arrayToType, childrenIndex, indexedCharTyper]);

  return React.cloneElement(children, {
    children: text,
    withCursor: isTyping,
  });
};

export default ArrayTyper;
