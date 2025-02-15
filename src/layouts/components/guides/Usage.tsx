import { FC, PropsWithChildren } from "react";
import GuideTitle from "@hw-rui-layouts/components/GuideTitle";
import GuideDivider from "@hw-rui-layouts/components/GuideDivider";
interface UsageProps extends PropsWithChildren {}
const Usage: FC<UsageProps> = ({ children }) => {
  return (
    <>
      <GuideDivider />
      <GuideTitle>Usage</GuideTitle>
      {children}
    </>
  );
};
export default Usage;
