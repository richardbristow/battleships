import React, { useEffect, useState } from 'react';

import Text from './Text';

const TyperText = ({ typeText, delay }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setText(text + typeText[index]);
      setIndex(index + 1);
    }, delay);

    if (index >= typeText.length) {
      clearTimeout(timerID);
    }

    return () => clearTimeout(timerID);
  }, [delay, index, text, typeText]);

  return <Text marker="&gt;">{text}</Text>;
};

const Typer = ({ children }) => {
  const renderChildren = () =>
    React.Children.map(children, (child) => {
      console.log(child);

      return child;
    });

  return <>{renderChildren()}</>;
};

export { Typer, TyperText };
