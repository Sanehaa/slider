'use client';

import React, { useEffect } from 'react';

interface DeskSetupProps {
  toggleTheme: () => void;
}

const DeskSetup: React.FC<DeskSetupProps> = ({ toggleTheme }) => {
  // Add this useEffect to handle the image upload functionality
  useEffect(() => {
    const imageContainer = document.getElementById('image-placeholder');
    
    if (imageContainer) {
      // Handle click to select file
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
                // Create image element
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

  return (
    <div className="desk-setup">
     
      
      <div className="lamp" onClick={toggleTheme}>
        <div className="lamp-cord"></div>
        <div className="lampshade"></div>
        <div className="light"></div>
      </div>
      
      <div className="plant-shelf">
        <div className="plant">
          <div className="pot"></div>
          <img className="plant-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCAxMDAiPjxnPjxwYXRoIGQ9Ik00MCA1QzMwIDIwIDIwIDMwIDI1IDUwQzE1IDQ1IDEwIDM1IDIwIDE1QzUgMjUgMCAzNSAxMCA2MEMwIDUwIDAgMzUgMTAgMTBDMTUgMzAgMjUgNDUgNDAgNjBDNTUgNDUgNjUgMzAgNzAgMTBDODAgMzUgODAgNTAgNzAgNjBDODAgMzUgNzUgMjUgNjAgMTVDNzAgMzUgNjUgNDUgNTUgNTBDNjAgMzAgNTAgMjAgNDAgNVoiIGZpbGw9IiM3ZWJlYTUiLz48L2c+PC9zdmc+" alt="Plant" />
        </div>
      </div>
      
      <div className="books-shelf">
        <div className="books">
          <img className="books-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgODAiPjxnPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSI4MCIgZmlsbD0iI2YzYzdkZCIgdHJhbnNmb3JtPSJza2V3WCgtNSkiLz48cmVjdCB4PSIyNSIgeT0iNSIgd2lkdGg9IjIwIiBoZWlnaHQ9Ijc1IiBmaWxsPSIjYjJkZmY3IiB0cmFuc2Zvcm09InNrZXdYKC04KSIvPjxyZWN0IHg9IjUwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iODAiIGZpbGw9IiNmOWQ3YTYiIHRyYW5zZm9ybT0ic2tld1goLTMpIi8+PHJlY3QgeD0iNzUiIHk9IjEwIiB3aWR0aD0iMjAiIGhlaWdodD0iNzAiIGZpbGw9IiNjM2EwZTUiIHRyYW5zZm9ybT0ic2tld1goLTcpIi8+PC9nPjwvc3ZnPg==" alt="Books" />
        </div>
      </div>
      
      <div className="monitor">
        <div className="screen">
          <div className="screen-content">
            <div className="editor">
              <div className="code-line" style={{ width: '70%' }}></div>
              <div className="code-line" style={{ width: '50%' }}></div>
              <div className="code-line" style={{ width: '80%' }}></div>
              <div className="code-line" style={{ width: '60%' }}></div>
              <div className="code-line" style={{ width: '40%' }}></div>
              <div className="code-line" style={{ width: '75%' }}></div>
              <div className="code-line" style={{ width: '55%' }}></div>
            </div>
            <div className="preview">
              <div className="preview-card"></div>
              <div className="terminal">
                <div className="terminal-line"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="monitor-base"></div>
        <div className="monitor-stand"></div>
      </div>
      
      <div className="coffee-cup">
        <img className="coffee-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PGc+PHBhdGggZD0iTTUgMTBIMzBWMzVDMzAgMzcuNzYxIDI3Ljc2MSA0MCAyNSA0MEgxMEM3LjIzOSA0MCA1IDM3Ljc2MSA1IDM1VjEwWiIgZmlsbD0iI2NmN2E5NSIvPjxwYXRoIGQ9Ik0zMCAxNUgzNUM0MCAzMCAzNSAzMCAzMCAyNVYxNVoiIGZpbGw9IiNjZjdhOTUiLz48cGF0aCBkPSJNMTAgNUgyNVYxMEgxMFY1WiIgZmlsbD0iI2NmN2E5NSIvPjxwYXRoIGQ9Ik0xNSAyMEgyMEMyMCAyNSAxNSAyNSAxNSAyMFoiIGZpbGw9IiNmZmViOTkiLz48L2c+PC9zdmc+" alt="Coffee Cup" />
      </div>
      
      <div className="desk"></div>
    </div>
  );
};

export default DeskSetup;