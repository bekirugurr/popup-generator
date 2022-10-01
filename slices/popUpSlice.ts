import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PopUpState {
  numberOfSelectedTemplate: number;
  size: "small" | "medium" | "large";
  position: { x: "left" | "center" | "right"; y: "top" | "center" | "bottom" };
  color: string;
  logo?: any;
  content: [string, string][]; //first string refers to what second string is used for. Button, header, placeholder etc.
  image?: any;
  visitorDevice?: "desktop" | "mobile" | false;
  howManySecondsAfter?: number | false;
  percentage?: number | false;
  trafficSource?: string | false;
  browserLanguage?: string[];
  exitIntentTargeting?: boolean;
  webhookURL?: string;
}

const initialState: PopUpState = {
  numberOfSelectedTemplate: 0,
  size: "medium",
  position: { x: "center", y: "center" },
  color: "#F37C34",
  content: [
    ["Top title", "Sign Up"],
    ["Sub title", "Join new adventure"],
    ["Name input placeholder", "Enter your name"],
    ["Email input placeholder", "Enter your email"],
    ["Button content", "Sign Up"],
    ["Footnote", "By signing up, you agree to private policy"],
    ["Top title", "Sign Up"],
    ["Sub title", "Join new adventure"],
    ["Name input placeholder", "Enter your name"],
    ["Email input placeholder", "Enter your email"],
    ["Button content", "Sign Up"],
    ["Footnote", "By signing up, you agree to private policy"],
  ], //first string refers to what second string is used for. Title, button, placeholder, footnote etc.
};

export const popUpSlice = createSlice({
  name: "popUp",
  initialState,
  reducers: {
    setTemplate: (state, action: PayloadAction<number>) => {
      return { ...state, numberOfSelectedTemplate: action.payload };
    },
    setStateTogether: (state, action: PayloadAction<PopUpState>) => {
      return { ...state, ...action.payload };
    },
    setSize: (state, action: PayloadAction<"small" | "medium" | "large">) => {
      return { ...state, size: action.payload };
    },
    setPosition: (
      state,
      action: PayloadAction<{
        x: "left" | "center" | "right";
        y: "top" | "center" | "bottom";
      }>
    ) => {
      return { ...state, position: action.payload };
    },
    setColor: (state, action: PayloadAction<string>) => {
      return { ...state, color: action.payload };
    },
    setLogo: (state, action: PayloadAction<any>) => {
      return { ...state, logo: action.payload };
    },
    setContent: (state, action: PayloadAction<[string, string][]>) => {
      return { ...state, content: action.payload };
    },
    setImage: (state, action: PayloadAction<any>) => {
      return { ...state, image: action.payload };
    },
    setVisitorDevice: (
      state,
      action: PayloadAction<"desktop" | "mobile" | false>
    ) => {
      return { ...state, visitorDevice: action.payload };
    },
    setHowManySecondsAfter: (state, action: PayloadAction<number | false>) => {
      return { ...state, howManySecondsAfter: action.payload };
    },
    setPercentage: (state, action: PayloadAction<number | false>) => {
      return { ...state, percentage: action.payload };
    },
    setTrafficSource: (state, action: PayloadAction<string | false>) => {
      return { ...state, trafficSource: action.payload };
    },
    setBrowserLanguage: (state, action: PayloadAction<string[]>) => {
      return { ...state, browserLanguage: action.payload };
    },
    setExitIntentTargeting: (state, action: PayloadAction<boolean>) => {
      return { ...state, exitIntentTargeting: action.payload };
    },
    setWebhookURL: (state, action: PayloadAction<string>) => {
      return { ...state, webhookURL: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTemplate,
  setStateTogether,
  setSize,
  setPosition,
  setColor,
  setLogo,
  setContent,
  setImage,
  setVisitorDevice,
  setHowManySecondsAfter,
  setPercentage,
  setTrafficSource,
  setBrowserLanguage,
  setExitIntentTargeting,
  setWebhookURL,
} = popUpSlice.actions;

export default popUpSlice.reducer;
