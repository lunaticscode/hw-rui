import { forwardRef } from "react";
import { ButtonProps } from "./types";
import buttonDefaultProps from "./consts/defaultProps";
import getMergedInjectedClassName from "@hw-rui-core/utils/getMergedInjectedClassName";
import { buttonCls } from "@hw-rui-core/consts/classNames";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, children, ...controlledProps } = props;
  const { size, variant, ...defaultProps } = {
    ...buttonDefaultProps,
    ...controlledProps,
  };

  return (
    <button
      {...defaultProps}
      className={getMergedInjectedClassName(buttonCls, className)}
      data-size={size}
      data-variant={variant}
      ref={ref}
    >
      {children}
    </button>
  );
});
export default Button;
