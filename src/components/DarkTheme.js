import { useEffect,useState } from 'react';

function DarkTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (isDarkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button onClick={handleToggle}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkTheme;