import {
  Accessbility,
  Intro,
  Notes,
  Props,
  Usage,
} from "@hw-rui-layouts/components/guides";
import CodeBlock from "@hw-rui-layouts/components/CodeBlock";
import GuideTitle from "@hw-rui-layouts/components/GuideTitle";
import useTranslator from "@hw-rui-layouts/hooks/useTranslator";
import { useEffect, useState } from "react";

const Guide = () => {
  const { Trans } = useTranslator();
  const [basicExampleCode, setBasicExampleCode] = useState();
  const setUsageCodes = () => {
    import("./markdowns/Usage_BasicExample.md")
      .then((res) => res.default)
      .then((res) => setBasicExampleCode(res));
  };
  useEffect(() => {
    setUsageCodes();
  }, []);
  return (
    <>
      <Intro title={"Accordion"}>
        <Trans langKey="accordion-intro" />
      </Intro>
      <Usage>
        <GuideTitle type="h3">Basic Example</GuideTitle>
        <CodeBlock code={basicExampleCode} />
      </Usage>
      <Props />
      <Notes />
      <Accessbility />
    </>
  );
};
export default Guide;
