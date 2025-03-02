import React from "react";
import { useTranslation } from "react-i18next";
import '../../locales/i18n'

const languages = [
  { code: "en", label: "English" },
  { code: "ru", label: "Russian" },
];

const App = () => {
  const { t, i18n } = useTranslation();

  // Language Change Handler
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">{t("hello")}</h1>

      <select
        onChange={changeLanguage}
        className="p-2 border rounded bg-white shadow-md"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default App;
