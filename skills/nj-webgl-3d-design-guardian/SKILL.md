---
name: nisal-webgl-3d-design-guardian
description: Guidelines for 3D model integration and WebGL animations in websites using React Three Fiber (R3F), Three.js, and Spline. Includes loading controls, shader configurations, mouse-interactive parallax, and performance optimizations. Use when designing landing pages, product pages, or portfolios featuring interactive 3D assets.
---

# Nisal WebGL 3D Design Guardian

## Purpose
This skill establishes guidelines and complete code recipes to integrate and animate interactive 3D models (glTF/GLB) on web pages, ensuring optimal loading speeds, premium rendering quality, and interactive WebGL elements.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to "add a 3D model", "integrate Spline", or use "WebGL".
2. The user requests React Three Fiber (R3F), Three.js, or 3D interactive graphics.

---

## 1. Stack Recommendations & Budgets

- **Simple Drop-in glTF/GLB**: Use `@google/model-viewer` for quick, declarative HTML layouts.
- **Complex Vanilla JS**: Use `three` (Three.js) directly inside canvas contexts.
- **Modern React Apps**: Use `@react-three/fiber` (R3F) and `@react-three/drei` (helper library).
- **Interactive Prototyping**: Use `Spline` (`@splinetool/react-spline`) for easy state machine triggers.
- **File Size Budget**: Keep production `.glb` assets **under 2-3MB**. Use Draco compression.

---

## 2. React Three Fiber (R3F) Model Loader & Controls

Standard template for loading a 3D model with loading fallback indicator and boundary limits.

### React Component
```jsx
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef();

  // Slow rotation animation
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1.5} />;
}

export default function App3D() {
  return (
    <div style={{ width: '100%', height: '500px', background: '#09090b' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />
        <Suspense fallback={null}>
          <Center>
            <Model url="/assets/models/cyber_cube.glb" />
          </Center>
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          minPolarAngle={Math.PI / 3} 
          maxPolarAngle={Math.PI / 1.8} 
        />
      </Canvas>
    </div>
  );
}

// Preload to prevent lag on mount
useGLTF.preload('/assets/models/cyber_cube.glb');
```

---

## 3. Mouse-Interactive Camera Parallax (WebGL Wow-Factor)

Makes the 3D scene shift slightly in perspective as the user moves their mouse.

```jsx
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function CameraParallax() {
  const { camera, pointer } = useThree();
  const target = new THREE.Vector3();

  useFrame(() => {
    // Calculate target camera positions based on normalized pointer coords (-1 to 1)
    target.set(pointer.x * 1.5, pointer.y * 1.5, camera.position.z);
    
    // Smoothly interpolate (lerp) camera position
    camera.position.lerp(target, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
```
*Drop `<CameraParallax />` inside the `<Canvas>` hierarchy.*

---

## 4. Spline 3D Embeds (High-fidelity design tool)

How to load Spline interactive scenes in React with responsive canvas scaling and custom loading states.

```jsx
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function InteractiveSpline() {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ position: 'relative', width: '100%', height: '600px' }}>
      {loading && (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', 
          alignItems: 'center', justifyContent: 'center', background: '#09090b', color: '#fff'
        }}>
          <span>Initializing 3D Space...</span>
        </div>
      )}
      <Spline 
        scene="https://prod.spline.design/your-scene-id/scene.splinecode" 
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
```

---

## 5. WebGL Optimization Checklist

- **Use Draco Compression**: Compress meshes via CLI before hosting:
  ```bash
  npx gltf-pipeline -i model.glb -o model-draco.glb -d
  ```
- **Control Frameloop Demand**: Only render when changes happen, reducing CPU/GPU load on passive pages:
  ```jsx
  <Canvas frameloop="demand"> ... </Canvas>
  ```
- **Dispose Unused Geometries/Materials**: If mounting and unmounting scenes frequently, ensure materials are disposed to prevent memory leaks:
  ```javascript
  geometry.dispose();
  material.dispose();
  ```


## Strict Guardrails
- **NEVER** load a 3D model without a `<Suspense>` boundary and a loading indicator.
- **NEVER** embed uncompressed `.gltf` or `.glb` files directly into a production build. Ensure Draco compression is used.
- **NEVER** run heavy physics or complex calculations inside `useFrame` without throttling or memoization.

