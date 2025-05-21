'use client';

export const createFloatingAnimation = (containerClass: string) => {
  const container = document.querySelector(`.${containerClass}`);
  if (!container) return;
  
  const objects = container.querySelectorAll('.floating-object');
  
  objects.forEach(obj => {
    obj.classList.add('floating-animation');
    
    // Reset animation after it completes
    setTimeout(() => {
      obj.classList.remove('floating-animation');
      setTimeout(() => {
        if (container.matches(':hover')) {
          obj.classList.add('floating-animation');
        }
      }, 50);
    }, 3000);
  });
};