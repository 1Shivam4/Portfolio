import React, { useState, useEffect, useRef } from "react";
import GLOBE from "vanta/dist/vanta.globe.min.js";
import * as THREE from "three";

const GlobeAnimation: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef<HTMLDivElement>(null);

  // Ensure THREE is available

  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.THREE = THREE;
    }
  }, []);

  useEffect(() => {
    if (!vantaEffect && myRef.current) {
      const effect = GLOBE({
        el: myRef.current,
        THREE: THREE, // Pass THREE explicitly
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xff0052,
        color2: 0x1ac81,
        size: 0.6,
        backgroundColor: 0xffffff,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={myRef}
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        opacity: 0.3,
      }}
    />
  );
};

export default GlobeAnimation;
