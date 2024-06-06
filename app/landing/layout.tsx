"use client";

import { useState } from "react";
import LandingLayoutContext, {
  LandingLayoutInterface,
} from "@/app/_context/landing-layout";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [setting, setSetting] = useState<LandingLayoutInterface>({
    nav: {
      height: 66,
    },
  });

  return (
    <LandingLayoutContext.Provider value={setting}>
      {children}
    </LandingLayoutContext.Provider>
  );
};

export default Layout;
