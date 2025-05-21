import React, { useEffect, useRef } from 'react';

// Define types for the APP object
interface AppInstance {
  Stage?: any;
  Layout?: any;
  [key: string]: any;
}

// Extend Window interface to include APP
declare global {
  interface Window {
    APP?: AppInstance;
  }
}

interface IndexAppComponentProps {
  onClose: () => void;
}

const IndexAppComponent: React.FC<IndexAppComponentProps> = ({ onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const appInstanceRef = useRef<AppInstance | null>(null);

  useEffect(() => {
    // Initialize your index.js app when component mounts
    const initApp = async () => {
      if (containerRef.current) {
        try {
          // Initialize the APP object
          const APP: AppInstance = window.APP || {};
          window.APP = APP;

          // For now, let's create a simple initialization
          // You can replace this with your actual Stage and Layout classes when they're ready
          
          // Option 1: If you have the Stage and Layout files ready as ES6 modules
          /*
          const { default: Stage } = await import('@/lib/Stage');
          const { default: Layout } = await import('@/lib/Layout');
          
          APP.Stage = new Stage();
          APP.Layout = new Layout();
          */

          // Option 2: If you want to load the original index.js content directly
          // You can embed your initialization logic here
          APP.Stage = {
            init: () => console.log('Stage initialized'),
            destroy: () => console.log('Stage destroyed')
          };
          
          APP.Layout = {
            init: () => console.log('Layout initialized'),
            destroy: () => console.log('Layout destroyed')
          };

          // Initialize
          if (APP.Stage?.init) APP.Stage.init();
          if (APP.Layout?.init) APP.Layout.init();
          
          appInstanceRef.current = APP;

          // Add any additional initialization logic from your index.js here
          console.log('Index app initialized');
          
        } catch (error) {
          console.error('Failed to initialize index.js app:', error);
        }
      }
    };

    initApp();

    // Cleanup when component unmounts
    return () => {
      if (appInstanceRef.current) {
        // Add any cleanup logic for your Stage and Layout classes
        if (appInstanceRef.current.Stage?.destroy) {
          appInstanceRef.current.Stage.destroy();
        }
        if (appInstanceRef.current.Layout?.destroy) {
          appInstanceRef.current.Layout.destroy();
        }
        delete window.APP;
        appInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        backgroundColor: '#000',
        zIndex: 9999 
      }}
    >
      <button 
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 10000,
          padding: '10px 20px',
          backgroundColor: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        ✕ Close
      </button>
      <div 
        ref={containerRef}
        id="index-app-container" 
        style={{ 
          width: '100%', 
          height: '100%',
          overflow: 'hidden'
        }}
      >
        {/* Your index.js app content will render here */}
        <div style={{ 
          color: 'white', 
          padding: '50px', 
          textAlign: 'center',
          fontSize: '24px' 
        }}>
          Index.js App Loaded
          <br />
          <small style={{ fontSize: '16px', opacity: 0.7 }}>
            Replace this with your actual app content
          </small>
        </div>
      </div>
    </div>
  );
};

export default IndexAppComponent;