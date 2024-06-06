"use client";

import { createContext, useState } from "react";

interface GlobalLayoutInterface {
  nav?: {
    height?: number | string | undefined;
  };
}

type Props = {
  children: React.ReactNode;
};

const GlobalLayoutContext = createContext<GlobalLayoutInterface>({});

const GlobalLayoutProvider = ({ children }: Props) => {
  const [setting, setSetting] = useState<GlobalLayoutInterface>({
    nav: {
      height: 66,
    },
  });

  return (
    <GlobalLayoutContext.Provider value={setting}>
      {children}
    </GlobalLayoutContext.Provider>
  );
};

export { GlobalLayoutContext };
export type { GlobalLayoutInterface };
export default GlobalLayoutProvider;
