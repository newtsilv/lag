import { describe, expect, it } from "vitest";

import {
  getHoverTransform,
  getModelCenterOffset,
  getModelFitScale,
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

  it("scales the large GLB model into the camera view", () => {
    expect(getModelFitScale(457)).toBeCloseTo(0.0066, 4);
  });

  it("turns pointer position into hover tilt and zoom", () => {
    expect(getHoverTransform(0.5, 0.5)).toEqual({ rotationX: 0, rotationY: 0, scale: 1.1 });
    expect(getHoverTransform(1, 0)).toEqual({ rotationX: 0.2, rotationY: 0.35, scale: 1.1 });
    expect(getHoverTransform(0, 1)).toEqual({ rotationX: -0.2, rotationY: -0.35, scale: 1.1 });
  });

  it("moves the model geometry so rotation uses its visual center as anchor", () => {
    expect(getModelCenterOffset([228, 85.5, 5.5])).toEqual([-228, -85.5, -5.5]);
  });
});
