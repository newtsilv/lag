import { describe, expect, it } from "vitest";

import {
  decorativeModelPaths,
  getEightBitDoPlacement,
  getGameCubePlacement,
  getHoverTransform,
  getModelCenterOffset,
  getModelFitScale,
  getScrolledModelRotationY,
  getScrollRotation,
} from "./floating-logo-3d";

describe("getScrollRotation", () => {
  it("starts facing front and rotates sideways with scroll", () => {
    expect(getScrollRotation(0)).toBeCloseTo(0);
    expect(getScrollRotation(0.5)).toBeCloseTo(0.6);
    expect(getScrollRotation(1)).toBeCloseTo(1.2);
  });

  it("clamps progress outside the document range", () => {
    expect(getScrollRotation(-1)).toBeCloseTo(0);
    expect(getScrollRotation(2)).toBeCloseTo(1.2);
  });

  it("adds scroll rotation to a decorative model base angle", () => {
    expect(getScrolledModelRotationY(-0.1, getScrollRotation(0))).toBeCloseTo(-0.1);
    expect(getScrolledModelRotationY(-0.1, getScrollRotation(0.5))).toBeCloseTo(0.5);
    expect(getScrolledModelRotationY(-0.1, getScrollRotation(1))).toBeCloseTo(1.1);
  });

  it("scales the large GLB model into the camera view", () => {
    expect(getModelFitScale(457)).toBeCloseTo(0.0066, 4);
  });

  it("turns pointer position into hover tilt and zoom", () => {
    expect(getHoverTransform(0.5, 0.5)).toEqual({ rotationX: 0, rotationY: 0, scale: 1.1 });
    expect(getHoverTransform(1, 0)).toEqual({ rotationX: 0.2, rotationY: 0.75, scale: 1.1 });
    expect(getHoverTransform(0, 1)).toEqual({ rotationX: -0.2, rotationY: -0.75, scale: 1.1 });
  });

  it("moves the model geometry so rotation uses its visual center as anchor", () => {
    expect(getModelCenterOffset([228, 85.5, 5.5])).toEqual([-228, -85.5, -5.5]);
  });

  it("loads the GameCube controller alongside the 3D logo", () => {
    expect(decorativeModelPaths.gameCube).toBe("/models/gamecube_controller.glb");
    expect(getGameCubePlacement()).toEqual({
      position: [1, -0.5, 0.36],
      rotation: [-5, 0, 0.22],
      scale: 0.013,
    });
  });

  it("exposes the 8BitDo model for subtle decorative accents", () => {
    expect(decorativeModelPaths.eightBitDo).toBe("/models/8bitdo_gamepad.glb");
    expect(getEightBitDoPlacement()).toEqual({
      position: [0, -0.18, 0],
      rotation: [-5, -0.1, -0.22],
      scale: 120,
    });
  });
});
