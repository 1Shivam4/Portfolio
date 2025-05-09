// src/types/vanta.d.ts
declare module "vanta/dist/vanta.globe.min.js" {
  interface VantaEffect {
    destroy: () => void;
  }

  interface VantaOptions {
    el: HTMLElement;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    [key: string]: any;
  }

  const VantaGlobe: (options: VantaOptions) => VantaEffect;
  export default VantaGlobe;
}
