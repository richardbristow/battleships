import { createContext, useContext, useState, useEffect } from 'react';

const AudioToggleContext = createContext();

const useAudio = () => useContext(AudioToggleContext);

const AudioContext = ({ children }) => {
  const [isMuted, setIsMuted] = useState(
    localStorage.getItem('battleships-isMuted') || false,
  );

  useEffect(() => {
    localStorage.setItem('battleships-isMuted', isMuted);
  }, [isMuted]);

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
