import React, { useState, useEffect, useCallback, useRef } from 'react';

import typingDelayTimer from '../typingDelayTimer';

const JsxTyper = ({
  children,
  startTypingDelay,
  handleNextBlock,
  nextBlockDelay,
}) => {
  const [elementToType, setElementToType] = useState();
  const [isTyping, setIsTyping] = useState(true);
  const startTypingDelayTimerRef = useRef(null);
  const nextBlockDelayTimerRef = useRef(null);

  const elementTyper = useCallback(async () => {
    startTypingDelayTimerRef.current = await typingDelayTimer(startTypingDelay);
    setElementToType(children.props.children);
    nextBlockDelayTimerRef.current = setTimeout(() => {
      handleNextBlock();
      setIsTyping(false);
    }, nextBlockDelay);
  }, [
    children.props.children,
    handleNextBlock,
    nextBlockDelay,
    startTypingDelay,
  ]);

  useEffect(() => {
    elementTyper();

    return () => clearTimeout(startTypingDelayTimerRef.current);
  }, [elementTyper]);

  return React.cloneElement(children, {
    children: elementToType,
    withCursor: isTyping,
  });
};

export default JsxTyper;
