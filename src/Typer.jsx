import React, { useEffect, useState, useRef, useCallback } from 'react';

const TextTyper = ({ characterDelay, children, blockDelayTimer }) => {
  const [text, setText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const {
    props: { children: childToType },
  } = children;
  const charDelayTimerRef = useRef(null);

  const charTyper = useCallback(
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
    [blockDelayTimer, characterDelay, currentCharIndex]
  );

  useEffect(() => {
    charTyper(childToType);

    return () => clearTimeout(charDelayTimerRef.current);
  }, [childToType, charTyper]);

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

const ArrayTyper = ({ children, characterDelay, blockDelayTimer }) => {
  const [text, setText] = useState([]);
  const [childrenIndex, setChildrenIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const charDelayTimerRef = useRef(null);
  const {
    props: { children: arrayToType },
  } = children;

  const indexedCharTyper = useCallback(
    (stringToType) => {
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
        blockDelayTimer();
      }
    },
    [
      arrayToType.length,
      blockDelayTimer,
      characterDelay,
      childrenIndex,
      currentCharIndex,
    ]
  );

  useEffect(() => {
    indexedCharTyper(arrayToType[childrenIndex]);

    return () => clearTimeout(charDelayTimerRef.current);
  }, [arrayToType, childrenIndex, indexedCharTyper]);

  return React.cloneElement(children, {
    children: text,
  });
};

const Typer = ({ characterDelay, textBlockDelay, children }) => {
  const [childrenIndex, setChildrenIndex] = useState(0);
  const blockDelayTimerRef = useRef(null);

  useEffect(() => () => clearTimeout(blockDelayTimerRef.current));

  const blockDelayTimer = useCallback(() => {
    blockDelayTimerRef.current = setTimeout(() => {
      setChildrenIndex((prevChildrenIndex) => prevChildrenIndex + 1);
    }, textBlockDelay);
  }, [textBlockDelay]);

  const childrenArray = React.Children.map(children, (child) => {
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
    }

    if (React.isValidElement(childToType)) {
      return <JsxTyper blockDelayTimer={blockDelayTimer}>{child}</JsxTyper>;
    }

    if (Array.isArray(childToType)) {
      return (
        <ArrayTyper
          characterDelay={characterDelay}
          blockDelayTimer={blockDelayTimer}
        >
          {child}
        </ArrayTyper>
      );
    }

    return null;
  });

  return childrenArray.slice(0, childrenIndex + 1);
};

export default Typer;
