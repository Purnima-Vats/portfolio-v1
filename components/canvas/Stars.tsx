"use client";

import {
    Points as DreiPoints,
    PointMaterial,
    Preload,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import { Suspense, useRef, useState } from "react";
import { BufferGeometry, Material, Points } from "three";

const Stars = () => {
    // Fix the ref type to properly match the Points from three.js
    const ref = useRef<Points<BufferGeometry, Material | Material[]>>(null);

    const [sphere] = useState<Float32Array>(() =>
        random.inSphere(new Float32Array(4500), { radius: 1.2 })
    );

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <DreiPoints
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
            >
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation
                    depthWrite={false}
                />
            </DreiPoints>
        </group>
    );
};

const StarsCanvas = () => {
    return (
        <div className="w-full h-auto absolute inset-0 z-[-1]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;

