'use client';

import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  
  useEffect(() => {
    // Apply theme class to body
    if (isDarkTheme) {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
    }
    
    // Update light beam based on theme
    const updateLightBeam = (isDark: boolean) => {
      const light = document.querySelector('.light') as HTMLElement;
      if (!light) return;
      
      if (isDark) {
        // Dark theme - show light with flicker effect
        light.classList.remove('flickering'); 
        void light.offsetWidth; // Force reflow to restart animation
        light.classList.add('flickering');
        
        // Set final state after animation
        setTimeout(() => {
          if (light) light.style.opacity = '0.7';
        }, 600);
      } else {
        // Light theme - hide light
        light.classList.remove('flickering');
        if (light) light.style.opacity = '0';
      }
    };
    
    updateLightBeam(isDarkTheme);
  }, [isDarkTheme]);
  
  return { isDarkTheme, toggleTheme };
};