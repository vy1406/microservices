import { INIT_APP } from "./types";

const initialState = {
  numOfLifts: 0,
  numOfFloors: 0,
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_APP:
      return {
        ...state,
        ...{
          numOfLifts: action.payload.numOfLifts,
          numOfFloors: action.payload.numOfFloors
        }
        
      };

    default:
      return state;
  }
};