import {
  cloneElement,
  forwardRef,
  ReactElement,
  useEffect,
  useRef,
} from "react";
import { PopoverTriggerProps } from "./types/popoverTrigger";
import getMergedInjectedClassName from "@hw-rui-core/utils/getMergedInjectedClassName";
import {
  popoverTriggerButtonCls,
  popoverTriggerCls,
} from "@hw-rui-core/consts/classNames";
import { usePopoverContext } from ".";
import useMergedRef from "@hw-rui-core/hooks/useMergedRef";

const PopoverTrigger = forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  (props, ref) => {
    const { className, children } = props;
    const popoverContentSlotRef = useRef<HTMLDivElement>(null);

    const { setTriggerRef, setContentSlotRef, handleClickTrigger } =
      usePopoverContext();
    const internalTriggreRef = useRef(null);
    const triggerRef = useMergedRef(ref, internalTriggreRef);

    useEffect(() => {
      setTriggerRef(internalTriggreRef);
    }, [ref, internalTriggreRef]);

    if (children && typeof children === "function") {
      const newElement = children(internalTriggreRef) as ReactElement;
      return cloneElement(newElement, {
        ...newElement.props,
        ref: triggerRef,
        onClick: handleClickTrigger,
      });
    }

    useEffect(() => {
      if (popoverContentSlotRef.current) {
        setContentSlotRef(popoverContentSlotRef);
      }
    }, [popoverContentSlotRef]);
    return (
      <>
        <span
          className={getMergedInjectedClassName(popoverTriggerCls, className)}
        >
          <button
            ref={triggerRef}
            onClick={handleClickTrigger}
            className={getMergedInjectedClassName(
              popoverTriggerButtonCls,
              className
            )}
          >
            {children ?? "Popover Open"}
          </button>
        </span>
        <div ref={popoverContentSlotRef} />
      </>
    );
  }
);
export default PopoverTrigger;
