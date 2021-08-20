import React, { useEffect, useState, useRef, useCallback } from 'react';

const TextTyper = ({ characterDelay, children, blockDelayTimer }) => {
  const [text, setText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const {
    props: { children: childToType },
  } = children;
  const charDelayTimerRef = useRef(null);

  const stringCharTyper = useCallback(
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
    stringCharTyper(childToType);

    return () => clearTimeout(charDelayTimerRef.current);
  }, [childToType, stringCharTyper]);

  return React.cloneElement(children, {
    children: text,
  });
};

const JsxTyper = ({ children, blockDelayTimer }) => {
  useEffect(() => {
    blockDelayTimer();
  }, [blockDelayTimer]);

  return children;
};

const Typer = ({ characterDelay, textBlockDelay, children }) => {
  const [childrenIndex, setChildrenIndex] = useState(0);
  const blockDelayTimerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(blockDelayTimerRef.current);
  });

  const blockDelayTimer = useCallback(() => {
    blockDelayTimerRef.current = setTimeout(() => {
      setChildrenIndex((prevChildrenIndex) => prevChildrenIndex + 1);
    }, textBlockDelay);
  }, [textBlockDelay]);

  const clonedArray = React.Children.map(children, (child) => {
    const {
      props: { children: childToType },
    } = child;

    if (typeof childToType === 'string') {
      return (
        <TextTyper
          characterDelay={characterDelay}
          blockDelayTimer={blockDelayTimer}
        >
          {child}
        </TextTyper>
      );
    } else if (React.isValidElement(childToType)) {
      return <JsxTyper blockDelayTimer={blockDelayTimer}>{child}</JsxTyper>;
    } else if (Array.isArray(childToType)) {
      console.log('array');
    } else {
      return null;
    }
  });

  return clonedArray.slice(0, childrenIndex + 1);
};

export { Typer, TextTyper };
