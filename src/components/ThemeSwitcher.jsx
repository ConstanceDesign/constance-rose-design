import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <label>
      <span>Dark Mode</span>
      <Switch
        onChange={setIsDarkMode}
        checked={isDarkMode}
        offColor="#888"
        onColor="#222"
        uncheckedIcon={false}
        checkedIcon={false}
      />
    </label>
  );
};

export default ThemeSwitcher;