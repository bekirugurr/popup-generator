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
  visitorDevice?: 'desktop' | 'mobile' | false;
  howManySecondsAfter?: number | false;
  percentage?: number | false;
  trafficSource?: string | false;
  browserLanguage?: string[] | false;
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
    setTemplate: (state, action: PayloadAction<number>) => {
      return {...state, numberOfSelectedTemplate:action.payload}
    },
    setSize: (state, action: PayloadAction<'small' | 'medium' | 'large'>) => {
      return {...state, size:action.payload}
    },
    setPosition: (state, action: PayloadAction<{x:'left' | 'center'| 'right', y: 'top' | 'center'| 'bottom'}>) => {
      return {...state, position:action.payload}
    },
    setColor: (state, action: PayloadAction<string>) => {
      return {...state, color:action.payload}
    },
    setLogo: (state, action: PayloadAction<any>) => {
      return {...state, logo:action.payload}
    },
    setContent: (state, action: PayloadAction<string[]>) => {
      return {...state, content:action.payload}
    },
    setImage: (state, action: PayloadAction<any>) => {
      return {...state, image:action.payload}
    },
    setVisitorDevice: (state, action: PayloadAction<'desktop' | 'mobile' | false>) => {
      return {...state, visitorDevice:action.payload}
    },
    setHowManySecondsAfter: (state, action: PayloadAction<number | false>) => {
      return {...state, howManySecondsAfter:action.payload}
    },
    setPercentage: (state, action: PayloadAction<number | false>) => {
      return {...state, percentage:action.payload}
    },
    setTrafficSource: (state, action: PayloadAction<string | false >) => {
      return {...state, trafficSource:action.payload}
    },

  },
});

// Action creators are generated for each case reducer function
export const { setTemplate, setSize, setPosition, setColor,setLogo, setContent, setImage, setVisitorDevice, setHowManySecondsAfter, setPercentage, setTrafficSource } = popUpSlice.actions;

export default popUpSlice.reducer;
