import { createContext, useState } from "react";

export interface LandingLayoutInterface {
  nav?: {
    height?: number | string | undefined;
  };
}

const LandingLayoutContext = createContext<LandingLayoutInterface>({});

export default LandingLayoutContext;
