import { FC } from "react";
import { useTranslation, Trans as OriginTrans } from "react-i18next";

interface TransProps {
  langKey: string;
}
const useTranslator = () => {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();

  const Trans: FC<TransProps> = ({ langKey }) => {
    return <OriginTrans>{t(langKey)}</OriginTrans>;
  };

  return {
    changeLanguage,
    Trans,
  };
};
export default useTranslator;
