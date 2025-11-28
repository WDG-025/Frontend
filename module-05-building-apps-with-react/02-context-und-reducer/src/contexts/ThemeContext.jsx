import { createContext } from 'react';

export const ThemeContext = createContext('halloween');
// Erstellt:
// 1) Provider,
// 2) interne `id` ueber ein `symbol` zum zuweisen/verlinken, und
// 3) ein Consumer, welchen wir nicht verwenden, sondern stattdessen hooks
