import { Primitive, Root, dispatchDiscreteCustomEvent } from "./primitve";
import type { PrimitivePropsWithRef } from "./primitve";
import { composeEventHandlers } from "./compose-event-handlers";

export {
  //
  Root,
  //
  dispatchDiscreteCustomEvent,
  composeEventHandlers,
};
export type { PrimitivePropsWithRef };
export default Primitive;
