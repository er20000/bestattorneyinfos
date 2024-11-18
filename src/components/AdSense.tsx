import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface AdSenseProps {
  client: string;
  slot: string;
  format?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
}

const AdSense: React.FC<AdSenseProps> = ({ client, slot, format = 'auto', responsive = true, style = {} }) => {
  const advertRef = useRef<HTMLModElement>(null);
  const location = useLocation();

  useEffect(() => {
    try {
      const adsbygoogle = window.adsbygoogle || [];
      adsbygoogle.push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, [location.pathname]); // Reinitialize ads on route change

  // Prevent default behavior on ad interactions
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Allow the ad click to proceed but prevent any navigation side effects
      e.stopPropagation();
    };

    if (advertRef.current) {
      advertRef.current.addEventListener('click', handleClick);
    }

    return () => {
      if (advertRef.current) {
        advertRef.current.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <div className="adsbygoogle-container">
      <ins
        ref={advertRef}
        className="adsbygoogle"
        style={style}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

// Add window type declaration for TypeScript
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default AdSense;