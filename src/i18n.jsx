import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locals/english/translation.json";
import kr from "./locals/korean/translation.json";
import uz from "./locals/uzbek/translation.json";
import ru from "./locals/russian/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      kr: { translation: kr },
      uz: { translation: uz },
      ru: { translation: ru },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
