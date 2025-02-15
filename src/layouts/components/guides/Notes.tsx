import GuideDivider from "@hw-rui-layouts/components/GuideDivider";
import GuideTitle from "@hw-rui-layouts/components/GuideTitle";
import { FC, PropsWithChildren } from "react";
interface NotesProps extends PropsWithChildren {}
const Notes: FC<NotesProps> = ({ children }) => {
  return (
    <>
      <GuideDivider />
      <GuideTitle>Notes</GuideTitle>
      {children}
    </>
  );
};
export default Notes;
