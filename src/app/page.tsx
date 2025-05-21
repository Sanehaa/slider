'use client';

import React, { useEffect, useState } from 'react';
import DeskSetup from '@/components/DeskSetup';
import Navigation from '@/components/Navigation/index';
import Footer from '@/components/Footer/index';
import { useTheme } from '@/hooks/useTheme';
import { createFloatingAnimation } from '@/utils/animations';
import IndexAppComponent from '../components/IndexAppComponen/index';

export default function Home() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [showIndexApp, setShowIndexApp] = useState(false);

  useEffect(() => {
    const imageContainer = document.getElementById('image-placeholder');
    
    if (imageContainer) {
      imageContainer.addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        
        input.onchange = function(e) {
          if (e.target && (e.target as HTMLInputElement).files && (e.target as HTMLInputElement).files![0]) {
            const file = (e.target as HTMLInputElement).files![0];
            const reader = new FileReader();
            
            reader.onload = function(e) {
              if (e.target && e.target.result) {
                const img = document.createElement('img');
                img.src = e.target.result as string;
                img.style.maxWidth = '100%';
                img.style.maxHeight = '100%';
                
                // Clear container and add image
                if (imageContainer) {
                  imageContainer.innerHTML = '';
                  imageContainer.appendChild(img);
                }
              }
            };
            
            reader.readAsDataURL(file);
          }
        };
        
        input.click();
      });
    }
  }, []);

  useEffect(() => {
    // Set up event listeners for interactive elements
    const funText = document.querySelector('.interaction-fun');
    const talkText = document.querySelector('.interaction-talk');
    const writeText = document.querySelector('.interaction-write');

    if (funText) {
      funText.addEventListener('mouseover', () => createFloatingAnimation('fun-objects'));
    }
    if (talkText) {
      talkText.addEventListener('mouseover', () => createFloatingAnimation('talk-objects'));
    }
    if (writeText) {
      writeText.addEventListener('mouseover', () => createFloatingAnimation('write-objects'));
    }

    // Clean up event listeners
    return () => {
      if (funText) {
        funText.removeEventListener('mouseover', () => createFloatingAnimation('fun-objects'));
      }
      if (talkText) {
        talkText.removeEventListener('mouseover', () => createFloatingAnimation('talk-objects'));
      }
      if (writeText) {
        writeText.removeEventListener('mouseover', () => createFloatingAnimation('write-objects'));
      }
    };
  }, []);

  // Initialize the index.js app when showIndexApp becomes true
  useEffect(() => {
    if (showIndexApp) {
      // The IndexAppComponent will handle initialization
    }
  }, [showIndexApp]);

  // Handle painting click to show the index.js app
  const handlePaintingClick = () => {
    setShowIndexApp(true);
  };

  // Close the index.js app and return to main page
  const handleCloseIndexApp = () => {
    setShowIndexApp(false);
  };

  // Render the index.js app overlay
  if (showIndexApp) {
    return <IndexAppComponent onClose={handleCloseIndexApp} />;
  }

  return (
    <div className="container">      
      <div className="left-section">
        <div className="picture-frame">
          <div className="nail"></div>
          <div className="string"></div>
          <div className="wooden-frame">
            <div className="image-container" onClick={handlePaintingClick}>
              <img src="/painting.png" alt="Painting" style={{ maxWidth: '100%', maxHeight: '100%', cursor: 'pointer' }} />
            </div>
          </div>
        </div>
        <DeskSetup toggleTheme={toggleTheme} />
      </div>
      
      <div className="right-section">
        <Navigation isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        
        <div className="greeting">
          <span className="wave">👋</span> Hi, I'm Saneha
        </div>
        
        <div className="heading">
          I like making <span className="outline-text interaction-fun">fun</span>,
          <br />
          interactive things
          <br />
          with code. I also
          <br />
          <span className="outline-text interaction-talk">talk</span> <span className="special-char">&</span> <span className="outline-text interaction-write">write</span> about
          <br />
          those things.
        </div>
        
        <div className="fun-objects">
          <div className="floating-object code-object" style={{ top: 400, left: 400 }}>{`{`}</div>
          <div className="floating-object code-object" style={{ top: 410, left: 430 }}>{`}`}</div>
          <div className="floating-object code-object" style={{ top: 390, left: 460 }}>{`<>`}</div>
          <div className="floating-object code-object" style={{ top: 420, left: 380 }}>{`~`}</div>
          <div className="floating-object code-object" style={{ top: 380, left: 410 }}>{`;`}</div>
        </div>
        
        <div className="talk-objects">
          <div className="floating-object" style={{ top: 520, left: 400, width: 30, height: 30, backgroundColor: '#9fa8da', borderRadius: '50%' }}></div>
          <div className="floating-object" style={{ top: 510, left: 440, width: 25, height: 25, backgroundColor: '#7986cb', borderRadius: '50%' }}></div>
          <div className="floating-object" style={{ top: 500, left: 380, width: 20, height: 20, backgroundColor: '#5c6bc0', borderRadius: '50%' }}></div>
        </div>
        
        <div className="write-objects">
          <div className="floating-object pencil" style={{ top: 520, left: 650, transform: 'rotate(45deg)' }}></div>
          <div className="floating-object pencil" style={{ top: 510, left: 680, transform: 'rotate(-30deg)' }}></div>
          <div className="floating-object pencil" style={{ top: 500, left: 620, transform: 'rotate(15deg)' }}></div>
          <div className="floating-object pencil" style={{ top: 490, left: 660, transform: 'rotate(-45deg)' }}></div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}