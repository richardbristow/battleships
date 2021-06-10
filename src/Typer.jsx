import React, { useEffect, useState } from 'react';

import Text from './Text';

const TyperText = ({ characterDelay, typerChild }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setText(text + typerChild.props.children[index]);
      setIndex(index + 1);
    }, characterDelay);

    if (index >= typerChild.props.children.length) {
      clearTimeout(timerID);
    }

    return () => clearTimeout(timerID);
  }, [typerChild.props.children, characterDelay, index, text]);

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
  React.Children.map(children, (child) => (
    <TyperText characterDelay={characterDelay} typerChild={child} />
  ));

export { Typer, TyperText };
