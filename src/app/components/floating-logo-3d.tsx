"use client";

import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import type { PointerEvent, RefObject } from "react";
import type { Group } from "three";

const MODEL_PATH = "/models/LAG_logo_3d_roxa.glb";
const GAMECUBE_MODEL_PATH = "/models/gamecube_controller.glb";
const EIGHT_BIT_DO_MODEL_PATH = "/models/8bitdo_gamepad.glb";
const MAX_SCROLL_ROTATION = 1.2;
const MODEL_MAX_DIMENSION = 457;
const MODEL_CENTER: [number, number, number] = [228, 85.5, 5.5];
const TARGET_MODEL_SIZE = 3;
const MAX_HOVER_ROTATION_X = 0.2;
const MAX_HOVER_ROTATION_Y = 0.75;
const HOVER_SCALE = 1.1;

type ModelPlacement = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
};

export const decorativeModelPaths = {
  gameCube: GAMECUBE_MODEL_PATH,
  eightBitDo: EIGHT_BIT_DO_MODEL_PATH,
} as const;

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

export function getScrolledModelRotationY(baseRotationY: number, scrollRotation: number) {
  return baseRotationY + scrollRotation;
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

export function getGameCubePlacement(): ModelPlacement {
  return {
    position: [1, -0.5, 0.36],
    rotation: [-5, 0, 0.22],
    scale: 0.013,
  };
}

export function getEightBitDoPlacement(): ModelPlacement {
  return {
    position: [0, -0.18, 0],
    rotation: [-5, -1.1, -0.22],
    scale: 120,
  };
}

function LogoModel({ hoverStateRef }: { hoverStateRef: RefObject<HoverState> }) {
  const logoRef = useRef<Group>(null);
  const targetRotation = useRef(0);
  const reduceMotion = useRef(false);
  const { scene } = useGLTF(MODEL_PATH);
  const { scene: gameCubeScene } = useGLTF(GAMECUBE_MODEL_PATH);
  const baseScale = getModelFitScale(MODEL_MAX_DIMENSION);
  const modelCenterOffset = getModelCenterOffset(MODEL_CENTER);
  const gameCubePlacement = getGameCubePlacement();

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
    const targetScale = hoverState.active ? hoverState.scale : 1;

    logoRef.current.rotation.y +=
      (targetRotation.current + hoverRotationY - logoRef.current.rotation.y) * 0.08;
    logoRef.current.rotation.x +=
      (floatingRotationX + hoverRotationX - logoRef.current.rotation.x) * 0.08;
    logoRef.current.rotation.z = Math.sin(elapsedTime * 0.55) * 0.025;
    logoRef.current.position.y = Math.sin(elapsedTime * 0.9) * 0.08;
    logoRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.08);
  });

  return (
    <group ref={logoRef}>
      <group scale={baseScale}>
        <primitive object={scene} position={modelCenterOffset} />
      </group>
      <primitive
        object={gameCubeScene}
        position={gameCubePlacement.position}
        rotation={gameCubePlacement.rotation}
        scale={gameCubePlacement.scale}
      />
    </group>
  );
}

function EightBitDoModel() {
  const controllerRef = useRef<Group>(null);
  const targetRotation = useRef(0);
  const reduceMotion = useRef(false);
  const { scene } = useGLTF(EIGHT_BIT_DO_MODEL_PATH);
  const placement = getEightBitDoPlacement();

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
    if (!controllerRef.current) {
      return;
    }

    const scrolledRotationY = getScrolledModelRotationY(placement.rotation[1], targetRotation.current);

    if (reduceMotion.current) {
      controllerRef.current.rotation.y = scrolledRotationY;
      controllerRef.current.position.y = placement.position[1];
      return;
    }

    const elapsedTime = clock.getElapsedTime();

    controllerRef.current.rotation.y = scrolledRotationY + Math.sin(elapsedTime * 0.45) * 0.12;
    controllerRef.current.rotation.z = placement.rotation[2] + Math.sin(elapsedTime * 0.35) * 0.04;
    controllerRef.current.position.y = placement.position[1] + Math.sin(elapsedTime * 0.65) * 0.06;
  });

  return (
    <group
      ref={controllerRef}
      position={placement.position}
      rotation={placement.rotation}
      scale={placement.scale}
    >
      <primitive object={scene} />
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
      className="relative mx-auto aspect-square w-full max-w-[20rem] overflow-hidden sm:max-w-md sm:overflow-visible lg:max-w-none"
      onPointerEnter={updateHoverState}
      onPointerLeave={() => {
        hoverStateRef.current = { active: false, rotationX: 0, rotationY: 0, scale: 1 };
      }}
      onPointerMove={updateHoverState}
    >
      <div className="absolute inset-10 rounded-full bg-[#985EF7]/16 blur-xl sm:blur-3xl" />
      <div className="absolute inset-x-16 bottom-20 h-12 rounded-full bg-[#985EF7]/20 blur-xl sm:blur-2xl" />
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
      <div className="pointer-events-none absolute inset-x-8 bottom-7 h-8 rounded-full bg-[#985EF7]/25 hidden sm:block sm:blur-xl" />
    </div>
  );
}

export function EightBitDoAccent({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <Canvas
        camera={{ position: [0, 0.08, 4.2], fov: 34 }}
        className="h-full w-full"
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.7} />
        <directionalLight color="#ffffff" intensity={2.1} position={[2.5, 3.5, 4]} />
        <pointLight color="#985EF7" intensity={2.8} position={[-2, 1.5, 2.5]} />
        <Suspense fallback={null}>
          <EightBitDoModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload(MODEL_PATH);
useGLTF.preload(GAMECUBE_MODEL_PATH);
useGLTF.preload(EIGHT_BIT_DO_MODEL_PATH);
