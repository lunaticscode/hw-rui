import { FC } from "react";
import { SelectTriggerProps } from "./types/selectTrigger";
import PopoverTrigger from "@hw-rui/Popover/PopoverTrigger";
import getMergedInjectedClassName from "@hw-rui-core/utils/getMergedInjectedClassName";
import { selectTriggerCls } from "@hw-rui-core/consts/classNames";

const SelectTrigger: FC<SelectTriggerProps> = (props) => {
  const { children, className } = props;
  return (
    <PopoverTrigger
      className={getMergedInjectedClassName(selectTriggerCls, className)}
    >
      {children}
    </PopoverTrigger>
  );
};
export default SelectTrigger;
