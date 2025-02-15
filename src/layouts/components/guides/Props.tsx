import GuideDivider from "@hw-rui-layouts/components/GuideDivider";
import GuideTitle from "@hw-rui-layouts/components/GuideTitle";
import { ReactNode } from "react";

const Props = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <GuideDivider />
      <GuideTitle>Props</GuideTitle>
      {children}
    </>
  );
};
export default Props;
