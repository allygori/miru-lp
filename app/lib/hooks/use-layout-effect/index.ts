import React from "react";

const useLayoutEffect = Boolean(globalThis?.document)
  ? React.useLayoutEffect
  : () => {};

export default useLayoutEffect;
