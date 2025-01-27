import { Context, useContext, useRef } from "react";

const useUIContext = <T>(ctx: Context<T>, ctxLabel?: string) => {
  const tostId = useRef<NodeJS.Timeout>();

  if (tostId.current) {
    tostId.current = setTimeout(() => {}, 1000);
  }

  const context = useContext(ctx);
  if (!context) {
    throw Error(
      `${ctxLabel ?? "This UI Context"} cannot access in this scope.`
    );
  }
  return context;
};
export default useUIContext;
