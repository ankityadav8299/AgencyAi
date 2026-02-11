import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({theme,setTheme}) => {
   useEffect(()=>{
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark').matches;
    setTheme(theme || (prefersDarkMode ? 'dark': 'light'))
   },[])
  // useeffect will make sure that the background also changes based on theme
  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme',theme)
  },[theme])
  

  return (
    <>
      <button>
        {theme === "dark" ? (
          <img
            onClick={() => setTheme("light")}
            src={assets.sun_icon}
            className="size-8.5 p-1.5 border border-grey-500 rounded-full"
          />
        ) : (
          <img
            onClick={() => setTheme("dark")}
            src={assets.moon_icon}
            className="size-8.5 p-1.5 border border-grey-500 rounded-full"
          />
        )}
      </button>
    </>
  );
}

export default ThemeToggleBtn
