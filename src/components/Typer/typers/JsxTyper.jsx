import React, { useState, useEffect, useCallback, useRef } from 'react';

import typingDelayTimer from '../typingDelayTimer';

const JsxTyper = ({ children, nextBlockDelayTimer, startTypingDelay }) => {
  const [elementToType, setElementToType] = useState();
  const [isTyping, setIsTyping] = useState(true);
  const startTypingDelayTimerRef = useRef(null);

  const elementTyper = useCallback(async () => {
    startTypingDelayTimerRef.current = await typingDelayTimer(startTypingDelay);
    setElementToType(children.props.children);
    nextBlockDelayTimer();
    setIsTyping(false);
  }, [children.props.children, nextBlockDelayTimer, startTypingDelay]);

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
