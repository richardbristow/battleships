import React, { useEffect, useState, useRef, useCallback } from 'react';

const typingDelayTimer = async (delay) =>
  new Promise((res) => setTimeout(res, delay));

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
