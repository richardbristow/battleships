import React, { useState, useCallback } from 'react';

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

  const handleNextBlock = useCallback(() => {
    setChildrenIndex((prevChildrenIndex) => prevChildrenIndex + 1);
  }, []);

  const childrenArray = React.Children.map(children, (child) => {
    const {
      props: { children: childToType },
    } = child;

    if (typeof childToType === 'string') {
      return (
        <TextTyper
          handleNextBlock={handleNextBlock}
          characterDelay={characterDelay}
          startTypingDelay={startTypingDelay}
          nextBlockDelay={nextBlockDelay}
        >
          {child}
        </TextTyper>
      );
    }

    if (React.isValidElement(childToType)) {
      return (
        <JsxTyper
          handleNextBlock={handleNextBlock}
          startTypingDelay={startTypingDelay}
          nextBlockDelay={nextBlockDelay}
        >
          {child}
        </JsxTyper>
      );
    }

    if (Array.isArray(childToType)) {
      return (
        <ArrayTyper
          handleNextBlock={handleNextBlock}
          characterDelay={characterDelay}
          startTypingDelay={startTypingDelay}
          nextBlockDelay={nextBlockDelay}
        >
          {child}
        </ArrayTyper>
      );
    }

    return React.cloneElement(child, {
      withCursor: true,
    });
  });

  return childrenArray.slice(0, childrenIndex + 1);
};

export default Typer;
