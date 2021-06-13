import React, { useEffect, useState } from 'react';

import Text from './Text';

const TyperText = ({ characterDelay, typerChild }) => {
  const [text, setText] = useState([]);
  const [charIndex, setCharIndex] = useState(0);
  const [typerChildIndex, setTyperChildIndex] = useState(0);

  useEffect(() => {
    const currentChild = typerChild.props.children[typerChildIndex];
    const timerID = setTimeout(() => {
      if (typeof currentChild === 'string') {
        setText([...text, currentChild[charIndex]]);
        setCharIndex(charIndex + 1);
      }
    }, characterDelay);

    if (currentChild) {
      if (charIndex >= currentChild.length) {
        clearTimeout(timerID);
        if (typerChildIndex < typerChild.props.children.length - 1) {
          setTyperChildIndex(typerChildIndex + 1);
          setCharIndex(0);
        }
      }

      if (typeof currentChild !== 'string') {
        clearTimeout(timerID);
        setText([...text, currentChild]);
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

  return React.cloneElement(typerChild, {
    children: text,
  });
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
