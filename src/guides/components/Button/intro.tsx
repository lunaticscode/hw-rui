import GuideTitle from "@hw-rui-layouts/components/GuideTitle";
import useTranslator from "@hw-rui-layouts/hooks/useTranslator";

const Intro = () => {
  const { Trans } = useTranslator();
  return (
    <>
      <GuideTitle>Button</GuideTitle>
      <Trans langKey="button-intro" />
    </>
  );
};
export default Intro;
