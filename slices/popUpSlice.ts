import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PopUpState {
  numberOfSelectedTemplate: number;
  size: 'small' | 'medium' | 'large';
  position: {x:'left' | 'center'| 'right', y: 'top' | 'center'| 'bottom'};
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
  position: {x:'center', y:'center'},
  color: '#F37C34',
  content: ['Sign up', 'Enter your email', 'By signing up, you agree to private policy']
};

export const popUpSlice = createSlice({
  name: "popUp",
  initialState,
  reducers: {
    changeTemplate: (state, action: PayloadAction<number>) => {
      return {...state, numberOfSelectedTemplate:action.payload}
    },
    changeSize: (state, action: PayloadAction<'small' | 'medium' | 'large'>) => {
      return {...state, size:action.payload}
    },
    changePosition: (state, action: PayloadAction<{x:'left' | 'center'| 'right', y: 'top' | 'center'| 'bottom'}>) => {
      return {...state, position:action.payload}
    },
    changeColor: (state, action: PayloadAction<string>) => {
      return {...state, color:action.payload}
    },
    changeLogo: (state, action: PayloadAction<any>) => {
      return {...state, logo:action.payload}
    },
    changeContent: (state, action: PayloadAction<string[]>) => {
      return {...state, content:action.payload}
    },
    changeImage: (state, action: PayloadAction<any>) => {
      return {...state, image:action.payload}
    },

  },
});

// Action creators are generated for each case reducer function
export const { changeTemplate, changeSize, changePosition, changeColor,changeLogo, changeContent, changeImage } = popUpSlice.actions;

export default popUpSlice.reducer;
