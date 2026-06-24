"use client";

import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import type { PointerEvent, RefObject } from "react";
import type { Group } from "three";

const MODEL_PATH = "/models/LAG_logo_3d_roxa.glb";
const MAX_SCROLL_ROTATION = 1.2;
const MODEL_MAX_DIMENSION = 457;
const MODEL_CENTER: [number, number, number] = [228, 85.5, 5.5];
const TARGET_MODEL_SIZE = 3;
const MAX_HOVER_ROTATION_X = 0.2;
const MAX_HOVER_ROTATION_Y = 0.35;
const HOVER_SCALE = 1.1;

type HoverTransform = {
  rotationX: number;
  rotationY: number;
  scale: number;
};

type HoverState = HoverTransform & {
  active: boolean;
};

export function getScrollRotation(progress: number) {
  const clampedProgress = Math.min(Math.max(progress, 0), 1);

  return clampedProgress * MAX_SCROLL_ROTATION;
}

export function getModelFitScale(maxDimension: number) {
  return TARGET_MODEL_SIZE / maxDimension;
}

export function getModelCenterOffset(center: [number, number, number]): [number, number, number] {
  return [-center[0], -center[1], -center[2]];
}

export function getHoverTransform(xProgress: number, yProgress: number): HoverTransform {
  const clampedX = Math.min(Math.max(xProgress, 0), 1);
  const clampedY = Math.min(Math.max(yProgress, 0), 1);

  return {
    rotationX: (0.5 - clampedY) * MAX_HOVER_ROTATION_X * 2,
    rotationY: (clampedX - 0.5) * MAX_HOVER_ROTATION_Y * 2,
    scale: HOVER_SCALE,
  };
}

function LogoModel({ hoverStateRef }: { hoverStateRef: RefObject<HoverState> }) {
  const logoRef = useRef<Group>(null);
  const targetRotation = useRef(0);
  const reduceMotion = useRef(false);
  const { scene } = useGLTF(MODEL_PATH);
  const baseScale = getModelFitScale(MODEL_MAX_DIMENSION);
  const modelCenterOffset = getModelCenterOffset(MODEL_CENTER);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      reduceMotion.current = motionQuery.matches;
    };
    const updateScrollRotation = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

      targetRotation.current = getScrollRotation(progress);
    };

    updateMotionPreference();
    updateScrollRotation();

    motionQuery.addEventListener("change", updateMotionPreference);
    window.addEventListener("scroll", updateScrollRotation, { passive: true });
    window.addEventListener("resize", updateScrollRotation);

    return () => {
      motionQuery.removeEventListener("change", updateMotionPreference);
      window.removeEventListener("scroll", updateScrollRotation);
      window.removeEventListener("resize", updateScrollRotation);
    };
  }, []);

  useFrame(({ clock }) => {
    if (!logoRef.current) {
      return;
    }

    if (reduceMotion.current) {
      logoRef.current.rotation.set(0, targetRotation.current, 0);
      logoRef.current.position.y = 0;
      return;
    }

    const elapsedTime = clock.getElapsedTime();
    const hoverState = hoverStateRef.current;
    const floatingRotationX = Math.sin(elapsedTime * 0.7) * 0.045;
    const hoverRotationX = hoverState.active ? hoverState.rotationX : 0;
    const hoverRotationY = hoverState.active ? hoverState.rotationY : 0;
    const targetScale = baseScale * (hoverState.active ? hoverState.scale : 1);

    logoRef.current.rotation.y +=
      (targetRotation.current + hoverRotationY - logoRef.current.rotation.y) * 0.08;
    logoRef.current.rotation.x +=
      (floatingRotationX + hoverRotationX - logoRef.current.rotation.x) * 0.08;
    logoRef.current.rotation.z = Math.sin(elapsedTime * 0.55) * 0.025;
    logoRef.current.position.y = Math.sin(elapsedTime * 0.9) * 0.08;
    logoRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.08);
  });

  return (
    <group ref={logoRef} scale={baseScale}>
      <primitive object={scene} position={modelCenterOffset} />
    </group>
  );
}

export function FloatingLogo3D() {
  const hoverStateRef = useRef<HoverState>({
    active: false,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
  });

  const updateHoverState = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const xProgress = (event.clientX - bounds.left) / bounds.width;
    const yProgress = (event.clientY - bounds.top) / bounds.height;
    const transform = getHoverTransform(xProgress, yProgress);

    hoverStateRef.current = { active: true, ...transform };
  };

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-md overflow-visible lg:max-w-none"
      onPointerEnter={updateHoverState}
      onPointerLeave={() => {
        hoverStateRef.current = { active: false, rotationX: 0, rotationY: 0, scale: 1 };
      }}
      onPointerMove={updateHoverState}
    >
      <div className="absolute inset-10 rounded-full bg-[#985EF7]/16 blur-3xl" />
      <div className="absolute inset-x-16 bottom-20 h-12 rounded-full bg-[#985EF7]/20 blur-2xl" />
      <Canvas
        camera={{ position: [0, 0.25, 5], fov: 38 }}
        className="relative z-10"
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight color="#ffffff" intensity={2.6} position={[3, 4, 5]} />
        <pointLight color="#985EF7" intensity={6} position={[-3, 1.5, 3]} />
        <Suspense fallback={null}>
          <LogoModel hoverStateRef={hoverStateRef} />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-x-8 bottom-7 h-8 rounded-full bg-[#985EF7]/25 blur-xl" />
    </div>
  );
}

useGLTF.preload(MODEL_PATH);
