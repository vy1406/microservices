import { INIT_APP } from "./types";

export const setApp = (numOfLifts, numOfFloors) => ({
  type: INIT_APP,
  payload: { numOfLifts, numOfFloors }
})