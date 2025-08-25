import React from 'react';
import './App.css';

const App = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bekastan-nasirov-a37258301/' },
    { name: 'WebSite', url: 'https://my-biography-nine.vercel.app/' },
    { name: 'YouTube', url: 'https://www.youtube.com/@5ekastan' },
    { name: 'GitHub', url: 'https://github.com/5ekastanx' },
    { name: 'Telegram', url: 'https://t.me/beka_stan' },
    { name: 'Instagram', url: 'https://www.instagram.com/5ekastan?igsh=MTN5NXJjanpjN2F4Mw==' },
    { name: 'Blog Posts', url: 'https://blog-a-pp-ten.vercel.app/' },
  ];

  return (
    <div className='app-container'>
      <div className='card'>
        <div className='profile-image-container'>
          <img src="./bekastan.png" alt="Bekastan Nasirov" className='profile-image'/>
        </div>
        
        <h1 className='logo'>BEKASTAN</h1>
        
        <div className='tags'>
          <span className='tag'>Fullstack Developer</span>
          <span className='tag'>Digital Craftsman</span>
        </div>
        
        <div className='social-buttons'>
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className='social-button'
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
