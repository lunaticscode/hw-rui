import GuideDivider from "@hw-rui-layouts/components/GuideDivider";
import GuideTitle from "@hw-rui-layouts/components/GuideTitle";
import { FC, PropsWithChildren } from "react";

interface AccessbilityProps extends PropsWithChildren {}
const Accessbility: FC<AccessbilityProps> = ({ children }) => {
  return (
    <>
      <GuideDivider />
      <GuideTitle>Accessbility</GuideTitle>
      {children}
    </>
  );
};
export default Accessbility;
