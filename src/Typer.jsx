import React, { useEffect, useState } from 'react';

import Text from './Text';

const TyperText = ({ characterDelay, typerChild }) => {
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [typerChildIndex, setTyperChildIndex] = useState(0);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setText(text + typerChild.props.children[typerChildIndex][charIndex]);
      setCharIndex(charIndex + 1);
    }, characterDelay);

    if (charIndex >= typerChild.props.children[typerChildIndex].length) {
      clearTimeout(timerID);
      if (typerChildIndex < typerChild.props.children.length - 1) {
        setTyperChildIndex(typerChildIndex + 1);
      }
    }

    return () => clearTimeout(timerID);
  }, [
    charIndex,
    characterDelay,
    text,
    typerChild.props.children,
    typerChildIndex,
  ]);

  return (
    <Text
      marker={typerChild.props.marker}
      textElementTag={typerChild.props.textElementTag}
    >
      {text}
    </Text>
  );
};

const Typer = ({ characterDelay, children }) =>
  React.Children.map(children, (child) => {
    const clonedChild = React.cloneElement(child, {
      children: Array.isArray(child.props.children)
        ? child.props.children
        : [child.props.children],
    });

    return (
      <TyperText characterDelay={characterDelay} typerChild={clonedChild} />
    );
  });

export { Typer, TyperText };
