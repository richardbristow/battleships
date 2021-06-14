import { createContext, useContext, useState } from 'react';

const AudioToggleContext = createContext();

const useAudio = () => useContext(AudioToggleContext);

const AudioContext = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <AudioToggleContext.Provider value={{ toggle: toggle, isMuted: isMuted }}>
      {children}
    </AudioToggleContext.Provider>
  );
};

export { useAudio, AudioContext };
