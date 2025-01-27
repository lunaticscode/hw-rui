import { FC } from "react";
import { SelectSelectedValueProps } from "./types/selectValue";
import getMergedInjectedClassName from "@hw-rui-core/utils/getMergedInjectedClassName";
import { selectSelectedValueCls } from "@hw-rui-core/consts/classNames";
import { useSelectContext } from ".";

const SelectSelectedValue: FC<SelectSelectedValueProps> = (props) => {
  const { className, placeholder } = props;
  const { selectedValue } = useSelectContext();
  console.log({ selectedValue });
  return (
    <div
      className={getMergedInjectedClassName(selectSelectedValueCls, className)}
    >
      {selectedValue || placeholder || "Pick Item"}
    </div>
  );
};
export default SelectSelectedValue;
