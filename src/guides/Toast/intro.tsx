import GuideTitle from "@hw-rui-layouts/components/GuideTitle";
import useTranslator from "@hw-rui-layouts/hooks/useTranslator";

const Intro = () => {
  const { Trans } = useTranslator();
  return (
    <>
      <GuideTitle>Toast</GuideTitle>
      <Trans langKey="toast-intro" />
    </>
  );
};
export default Intro;
