import GuideTitle from "@hw-rui-layouts/components/GuideTitle";
import useTranslator from "@hw-rui-layouts/hooks/useTranslator";

const Intro = () => {
  const { Trans } = useTranslator();
  return (
    <>
      <GuideTitle>Select</GuideTitle>
      <Trans langKey="select-intro" />
    </>
  );
};
export default Intro;
