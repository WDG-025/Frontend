import { use, useState } from 'react';

import { ThemeContext } from './ThemeContext';

const allowedTheme = ['halloween', 'cyberpunk', 'dim', 'abyss', 'retro'];

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('halloween');

  function changeTheme(newTheme) {
    if (allowedTheme.includes(newTheme)) {
      setTheme(newTheme);
    }
  }

  return <ThemeContext value={{ theme, changeTheme }}>{children}</ThemeContext>;
  // return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return use(ThemeContext);
}
