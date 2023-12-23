// import { useEffect, useState } from 'react'

// function useLocalState (defaultValue, key)  {

//     const [value, setValue] = 
//         useState(() => {
//             const localStorageValue = localStorage.getItem(key);
//             return localStorageValue !== null ? JSON.parse(localStorageValue) : defaultValue;
//         });

//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(value));
//     }, [key, value]);

//     return [value, setValue];
// }

// export {useLocalState}

import { useEffect, useState } from 'react';

function useLocalState(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const localStorageValue = localStorage.getItem(key);
    try {
      // Parse JSON only if localStorageValue is not undefined
      return localStorageValue !== null ? JSON.parse(localStorageValue) : defaultValue;
    } catch (error) {
      console.error('Error parsing JSON from localStorage:', error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error stringifying value to JSON:', error);
    }
  }, [key, value]);

  return [value, setValue];
}

export { useLocalState };
