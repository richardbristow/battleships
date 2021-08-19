import React, { useEffect, useState, useRef, useCallback } from 'react';

const TextTyper = ({
  setChildrenIndex,
  characterDelay,
  textBlockDelay,
  children,
}) => {
  const [text, setText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const {
    props: { children: childToType },
  } = children;
  const charDelayTimerRef = useRef(null);
  const blockDelayTimerRef = useRef(null);

  const blockDelayTimer = useCallback(() => {
    blockDelayTimerRef.current = setTimeout(() => {
      setChildrenIndex((prevChildrenIndex) => prevChildrenIndex + 1);
    }, textBlockDelay);
  }, [setChildrenIndex, textBlockDelay]);

  const stringTyper = useCallback(() => {
    if (currentCharIndex < childToType.length) {
      charDelayTimerRef.current = setTimeout(() => {
        setText((prevText) => prevText + childToType[currentCharIndex]);
        setCurrentCharIndex(currentCharIndex + 1);
      }, characterDelay);
    } else {
      blockDelayTimer();
    }
  }, [blockDelayTimer, characterDelay, childToType, currentCharIndex]);

  useEffect(() => {
    if (typeof childToType === 'string') {
      stringTyper();
    } else if (React.isValidElement(childToType)) {
      setText(childToType);
      blockDelayTimer();
    }

    return () => {
      clearTimeout(charDelayTimerRef.current);
      clearTimeout(blockDelayTimerRef.current);
    };
  }, [blockDelayTimer, childToType, stringTyper]);

  return React.cloneElement(children, {
    children: text,
  });
};

const Typer = ({ characterDelay, textBlockDelay, children }) => {
  const [childrenIndex, setChildrenIndex] = useState(0);

  const clonedArray = React.Children.map(children, (child) => (
    <TextTyper
      setChildrenIndex={setChildrenIndex}
      characterDelay={characterDelay}
      textBlockDelay={textBlockDelay}
    >
      {child}
    </TextTyper>
  ));

  return clonedArray.slice(0, childrenIndex + 1);
};

export { Typer, TextTyper };
