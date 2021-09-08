import React, { useEffect, useState, useRef, useCallback } from 'react';

import ArrayTyper from './typers/ArrayTyper';
import TextTyper from './typers/TextTyper';
import JsxTyper from './typers/JsxTyper';

const Typer = ({
  characterDelay,
  nextBlockDelay,
  startTypingDelay,
  children,
}) => {
  const [childrenIndex, setChildrenIndex] = useState(0);
  const nextBlockDelayTimerRef = useRef(null);

  useEffect(() => () => clearTimeout(nextBlockDelayTimerRef.current));

  const nextBlockDelayTimer = useCallback(() => {
    nextBlockDelayTimerRef.current = setTimeout(() => {
      setChildrenIndex((prevChildrenIndex) => prevChildrenIndex + 1);
    }, nextBlockDelay);
  }, [nextBlockDelay]);

  const childrenArray = React.Children.map(children, (child) => {
    const {
      props: { children: childToType },
    } = child;

    if (typeof childToType === 'string') {
      return (
        <TextTyper
          characterDelay={characterDelay}
          nextBlockDelayTimer={nextBlockDelayTimer}
          startTypingDelay={startTypingDelay}
        >
          {child}
        </TextTyper>
      );
    }

    if (React.isValidElement(childToType)) {
      return (
        <JsxTyper
          nextBlockDelayTimer={nextBlockDelayTimer}
          startTypingDelay={startTypingDelay}
        >
          {child}
        </JsxTyper>
      );
    }

    if (Array.isArray(childToType)) {
      return (
        <ArrayTyper
          characterDelay={characterDelay}
          nextBlockDelayTimer={nextBlockDelayTimer}
          startTypingDelay={startTypingDelay}
        >
          {child}
        </ArrayTyper>
      );
    }

    return child;
  });

  return childrenArray.slice(0, childrenIndex + 1);
};

export default Typer;
