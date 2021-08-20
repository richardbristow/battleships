import React, { useEffect, useState, useRef, useCallback } from 'react';

const TextTyper = ({ characterDelay, children, blockDelayTimer }) => {
  const [text, setText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const {
    props: { children: childToType },
  } = children;
  const charDelayTimerRef = useRef(null);

  const stringTyper = useCallback(
    (stringToType) => {
      if (currentCharIndex < stringToType.length) {
        charDelayTimerRef.current = setTimeout(() => {
          setText((prevText) => prevText + stringToType[currentCharIndex]);
          setCurrentCharIndex(currentCharIndex + 1);
        }, characterDelay);
      } else {
        blockDelayTimer();
      }
    },
    [blockDelayTimer, characterDelay, currentCharIndex],
  );

  useEffect(() => {
    stringTyper(childToType);

    return () => clearTimeout(charDelayTimerRef.current);
  }, [childToType, stringTyper]);

  return React.cloneElement(children, {
    children: text,
  });
};

const Typer = ({ characterDelay, textBlockDelay, children }) => {
  const [childrenIndex, setChildrenIndex] = useState(0);
  const blockDelayTimerRef = useRef(null);

  const blockDelayTimer = useCallback(() => {
    blockDelayTimerRef.current = setTimeout(() => {
      setChildrenIndex((prevChildrenIndex) => prevChildrenIndex + 1);
    }, textBlockDelay);
  }, [setChildrenIndex, textBlockDelay]);

  const clonedArray = React.Children.map(children, (child) => {
    const {
      props: { children: childToType },
    } = child;

    if (typeof childToType === 'string') {
      return (
        <TextTyper
          setChildrenIndex={setChildrenIndex}
          characterDelay={characterDelay}
          textBlockDelay={textBlockDelay}
          blockDelayTimer={blockDelayTimer}
        >
          {child}
        </TextTyper>
      );
    } else if (React.isValidElement(childToType)) {
      return child;
    } else if (Array.isArray(childToType)) {
      console.log('array');
    } else {
      return null;
    }
  });

  return clonedArray.slice(0, childrenIndex + 1);
};

export { Typer, TextTyper };
