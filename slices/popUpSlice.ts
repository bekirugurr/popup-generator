import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PopUpState {
  numberOfSelectedTemplate: number;
  size: 'small' | 'medium' | 'large';
  position: string;
  color: string;
  logo?:any;
  content: string[];
  image?: any;
  visitorDevice?: 'desktop' | 'mobile';
  howManySecondsAfter?: number;
  percentage?: number;
  trafficSource?: string;
  browserLanguage?: string[];
  exitIntentTargeting?: boolean;

}

const initialState: PopUpState = {
  numberOfSelectedTemplate: 1,
  size: 'medium' ,
  position: 'center',
  color: 'prime-violet',
  content: []
};

export const popUpSlice = createSlice({
  name: "popUp",
  initialState,
  reducers: {
    changeTemplate: (state, action: PayloadAction<number>) => {
      return {...state, numberOfSelectedTemplate:action.payload}
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { changeTemplate } = popUpSlice.actions;

export default popUpSlice.reducer;
