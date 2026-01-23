
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);

  // Remove loader com transição suave de engenharia
  window.addEventListener('load', () => {
    const loader = document.getElementById('app-loader');
    if (loader) {
      loader.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 800);
    }
  });
}
