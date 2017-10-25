// Request animation frame fix for create-react-app
const raf = (global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
});

export const polyfills = { raf };
