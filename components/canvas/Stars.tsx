"use client";

import { useState, useRef, Suspense, JSX } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Points as DreiPoints,
    PointMaterial,
    Preload,
} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Points as ThreePoints } from "three";

const Stars = (props: JSX.IntrinsicElements["points"]) => {
    const ref = useRef(null);
    const [sphere] = useState<Float32Array>(() =>
        random.inSphere(new Float32Array(4500), { radius: 1.2 })
    );

    useFrame((_, delta) => {
        const points = ref.current as ThreePoints;
        if (points) {
            points.rotation.x -= delta / 10;
            points.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <DreiPoints
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
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
