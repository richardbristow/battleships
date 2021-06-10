import React, { useEffect, useState } from 'react';

import Text from './Text';

const TyperText = ({ characterDelay, child }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setText(text + child.props.children[index]);
      setIndex(index + 1);
    }, characterDelay);

    if (index >= child.props.children.length) {
      clearTimeout(timerID);
    }

    return () => clearTimeout(timerID);
  }, [child.props.children, characterDelay, index, text]);

  return (
    <Text
      marker={child.props.marker}
      textElementTag={child.props.textElementTag}
    >
      {text}
    </Text>
  );
};

const Typer = ({ characterDelay, children }) =>
  React.Children.map(children, (child) => (
    <TyperText characterDelay={characterDelay} child={child} />
  ));

export { Typer, TyperText };
