import React, { useEffect, useState } from 'react';

const TyperText = ({ characterDelay, children }) => {
  const [text, setText] = useState([]);
  const [charIndex, setCharIndex] = useState(0);
  const [typerChildIndex, setTyperChildIndex] = useState(0);

  const typerChildren = children;

  useEffect(() => {
    const currentChild = typerChildren.props.children[typerChildIndex];

    const timerID = setTimeout(() => {
      if (typeof currentChild === 'string') {
        setText([...text, currentChild[charIndex]]);
        setCharIndex(charIndex + 1);
      }
    }, characterDelay);

    if (currentChild) {
      if (charIndex >= currentChild.length) {
        clearTimeout(timerID);
        if (typerChildIndex < typerChildren.props.children.length - 1) {
          setTyperChildIndex(typerChildIndex + 1);
          setCharIndex(0);
        }
      }

      if (typeof currentChild !== 'string') {
        clearTimeout(timerID);
        setText([...text, currentChild]);
        setTyperChildIndex(typerChildIndex + 1);
        setCharIndex(0);
      }
    }

    return () => clearTimeout(timerID);
  }, [
    charIndex,
    characterDelay,
    text,
    typerChildIndex,
    typerChildren.props.children,
  ]);

  return React.cloneElement(typerChildren, {
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

    return <TyperText characterDelay={characterDelay}>{clonedChild}</TyperText>;
  });

export { Typer, TyperText };
