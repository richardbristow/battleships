import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AudioToggleContext = createContext();

const useAudio = () => useContext(AudioToggleContext);

const AudioContext = ({ children }) => {
  const [isMuted, setIsMuted] = useState(
    JSON.parse(localStorage.getItem('battleships-isMuted')) || false
  );

  useEffect(() => {
    localStorage.setItem('battleships-isMuted', isMuted);
  }, [isMuted]);

  const toggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <AudioToggleContext.Provider value={{ toggle, isMuted }}>
      {children}
    </AudioToggleContext.Provider>
  );
};

AudioContext.defaultProps = {
  children: null,
};

AudioContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
};

export { useAudio, AudioContext };
