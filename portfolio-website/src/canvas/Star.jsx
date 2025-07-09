import React, { useState, useRef, Suspense, useMemo } from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random";

const StyledStarCanvasWrapper = styled.div`
   position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  `;

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  // Create multiple color variations
  const colors = useMemo(() => [
    "#ff6b6b", // coral red
    "#4ecdc4", // turquoise
    "#45b7d1", // sky blue
    "#f9ca24", // golden yellow
    "#f0932b", // orange
    "#eb4d4b", // red
    "#6c5ce7", // purple
    "#fd79a8", // pink
    "#00b894", // green
    "#e17055", // salmon
    "#74b9ff", // light blue
    "#a29bfe", // lavender
  ], []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Layer 1: Large colorful stars */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={colors[0]}
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      
      {/* Layer 2: Medium stars with different color */}
      <Points 
        positions={random.inSphere(new Float32Array(3000), { radius: 1.0 })} 
        stride={3} 
        frustumCulled 
        {...props}
      >
        <PointMaterial
          transparent
          color={colors[1]}
          size={0.0025}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>

      {/* Layer 3: Small twinkling stars */}
      <Points 
        positions={random.inSphere(new Float32Array(2000), { radius: 0.8 })} 
        stride={3} 
        frustumCulled 
        {...props}
      >
        <PointMaterial
          transparent
          color={colors[2]}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>

      {/* Layer 4: Accent stars */}
      <Points 
        positions={random.inSphere(new Float32Array(1500), { radius: 1.5 })} 
        stride={3} 
        frustumCulled 
        {...props}
      >
        <PointMaterial
          transparent
          color={colors[3]}
          size={0.0035}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const MultiColorStars = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  
  // 🎨 COLOR CONFIGURATION - Easily customizable color palette
  const colors = [
    "#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#f0932b", "#eb4d4b",
    "#6c5ce7", "#fd79a8", "#00b894", "#e17055", "#74b9ff", "#a29bfe"
  ];

  // ⚙️ STAR DENSITY CONFIGURATION - Adjust star counts per layer
  const STAR_COUNTS = {
    primary: 1000,    // Main star field (was 4000)
    secondary: 700,  // Secondary layer (was 3000)
    tertiary: 500,   // Accent layer (was 2000)
    highlights: 400   // Bright highlights (was 800)
  };

  // 🎯 STAR SIZE CONFIGURATION - Control star sizes
  const STAR_SIZES = {
    primary: 0.0025,
    secondary: 0.003,
    tertiary: 0.0035,
    highlights: 0.004
  };

  // 🌐 RADIUS CONFIGURATION - Control star field depth
  const STAR_RADIUS = {
    primary: 1.2,
    secondary: 1.0,
    tertiary: 0.9,
    highlights: 1.5
  };

  // 🔄 ROTATION SPEED CONFIGURATION - Control animation speed
  const ROTATION_SPEEDS = {
    primary: { x: 12, y: 18 },    // Slower rotation
    secondary: { x: 8, y: 12 },   // Medium rotation
    tertiary: { x: 15, y: 20 }    // Fastest rotation
  };

  useFrame((state, delta) => {
    // Different rotation speeds for each layer
    if (ref1.current) {
      ref1.current.rotation.x -= delta / ROTATION_SPEEDS.primary.x;
      ref1.current.rotation.y -= delta / ROTATION_SPEEDS.primary.y;
    }
    if (ref2.current) {
      ref2.current.rotation.x -= delta / ROTATION_SPEEDS.secondary.x;
      ref2.current.rotation.y -= delta / ROTATION_SPEEDS.secondary.y;
    }
    if (ref3.current) {
      ref3.current.rotation.x -= delta / ROTATION_SPEEDS.tertiary.x;
      ref3.current.rotation.y -= delta / ROTATION_SPEEDS.tertiary.y;
    }
  });

  return (
    <group>
      {/* Primary star field */}
      <Points 
        ref={ref1}
        positions={random.inSphere(new Float32Array(STAR_COUNTS.primary), { radius: STAR_RADIUS.primary })} 
        stride={3} 
        frustumCulled
      >
        <PointMaterial
          transparent
          color={colors[0]} // 🎨 Change index to use different colors
          size={STAR_SIZES.primary}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>

      {/* Secondary colorful layer */}
      <Points 
        ref={ref2}
        positions={random.inSphere(new Float32Array(STAR_COUNTS.secondary), { radius: STAR_RADIUS.secondary })} 
        stride={3} 
        frustumCulled
      >
        <PointMaterial
          transparent
          color={colors[4]} // 🎨 Change index to use different colors
          size={STAR_SIZES.secondary}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>

      {/* Tertiary accent layer */}
      <Points 
        ref={ref3}
        positions={random.inSphere(new Float32Array(STAR_COUNTS.tertiary), { radius: STAR_RADIUS.tertiary })} 
        stride={3} 
        frustumCulled
      >
        <PointMaterial
          transparent
          color={colors[8]} // 🎨 Change index to use different colors
          size={STAR_SIZES.tertiary}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>

      {/* Sparse bright highlights */}
      <Points 
        positions={random.inSphere(new Float32Array(STAR_COUNTS.highlights), { radius: STAR_RADIUS.highlights })} 
        stride={3} 
        frustumCulled
      >
        <PointMaterial
          transparent
          color={colors[11]} // 🎨 Change index to use different colors
          size={STAR_SIZES.highlights}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StyledStarCanvas = () => {
  return (
    <StyledStarCanvasWrapper>
      <Canvas camera={{ position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <MultiColorStars />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledStarCanvasWrapper>
  );
};

export default StyledStarCanvas;