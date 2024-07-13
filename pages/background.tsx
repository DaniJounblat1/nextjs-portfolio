"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense } from "react";
import { Points as PointsType } from "three";

// Function to generate random colors
const generateColors = (numStars) => {
  const colors = new Float32Array(numStars * 3);
  for (let i = 0; i < numStars; i++) {
    const r = Math.random();
    const g = Math.random();
    const b = Math.random();
    colors.set([r, g, b], i * 3);
  }
  return colors;
};

// Main component for star background
const StarBackground = (props) => {
  const ref = useRef<PointsType | null>(null);
  const numStars = 1000;

  // Generate sphere positions and colors
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(numStars * 3), { radius: 1.2 })
  );
  const [colors] = useState(() => generateColors(numStars));

  // Animate the star rotation
  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={sphere}
        colors={colors}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          vertexColors
          size={0.003}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Canvas component for the star background
const StarsCanvas = () => (
  <>
    <div className="stars-canvas">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
    <style jsx>{`
      .stars-canvas {
        width: 100%;
        height: auto;
        position: fixed;
        inset: 0;
        z-index: -10;
      }
    `}</style>
  </>
);

// Main background page component
const BackgroundPage = () => (
  <div>
    <StarsCanvas />
  </div>
);

export default BackgroundPage;
