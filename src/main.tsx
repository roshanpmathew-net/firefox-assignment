import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const savedWallpaper =
  localStorage.getItem("image_url");

if (savedWallpaper) {
  document.body.style.setProperty(
    "--wallpaper-url",
    `url(${savedWallpaper})`
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
