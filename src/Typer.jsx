import React, { useEffect, useState } from 'react';

const TyperText = ({
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

  useEffect(() => {
    if (currentCharIndex < childToType.length) {
      const charDelayTimer = setTimeout(() => {
        setText((prevText) => prevText + childToType[currentCharIndex]);
        setCurrentCharIndex(currentCharIndex + 1);
      }, characterDelay);
      return () => clearTimeout(charDelayTimer);
    } else {
      const blockDelayTimer = setTimeout(() => {
        setChildrenIndex((prevChildrenIndex) => prevChildrenIndex + 1);
      }, textBlockDelay);
      return () => clearTimeout(blockDelayTimer);
    }
  }, [
    characterDelay,
    childToType,
    currentCharIndex,
    setChildrenIndex,
    textBlockDelay,
  ]);

  return React.cloneElement(children, {
    children: text,
  });
};

const Typer = ({ characterDelay, textBlockDelay, children }) => {
  const [childrenIndex, setChildrenIndex] = useState(0);

  const clonedArray = React.Children.map(children, (child) => (
    <TyperText
      setChildrenIndex={setChildrenIndex}
      characterDelay={characterDelay}
      textBlockDelay={textBlockDelay}
    >
      {child}
    </TyperText>
  ));

  return clonedArray.slice(0, childrenIndex + 1);
};

export { Typer, TyperText };
