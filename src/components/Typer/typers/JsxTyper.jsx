import React, { useState, useEffect, useCallback, useRef } from 'react';

const JsxTyper = ({
  children,
  startTypingDelay,
  handleNextBlock,
  nextBlockDelay,
}) => {
  const [elementToType, setElementToType] = useState();
  const [showCursor, setShowCursor] = useState(true);
  const [isCursorBlinking, setIsCursorBlinking] = useState(true);
  const startTypingDelayTimerRef = useRef(null);
  const nextBlockDelayTimerRef = useRef(null);

  const elementTyper = useCallback(() => {
    setIsCursorBlinking(true);
    setElementToType(children.props.children);
    nextBlockDelayTimerRef.current = setTimeout(() => {
      handleNextBlock();
      setShowCursor(false);
    }, nextBlockDelay);
  }, [children.props.children, handleNextBlock, nextBlockDelay]);

  useEffect(() => {
    startTypingDelayTimerRef.current = setTimeout(() => {
      setIsCursorBlinking(false);
      elementTyper();
    }, startTypingDelay);

    return () => {
      clearTimeout(startTypingDelayTimerRef.current);
      clearTimeout(nextBlockDelayTimerRef.current);
    };
  }, [elementTyper, startTypingDelay]);

  return React.cloneElement(children, {
    children: elementToType,
    withCursor: showCursor,
    cursorBlink: isCursorBlinking,
  });
};

export default JsxTyper;
