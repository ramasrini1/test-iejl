import React from "react";
import "./LocaleSelector.css";

const localeList = [
  { name: "English", code: "en", lang: "English" },
  { name: "中文", code: "zh", lang: "Chinese" },
  { name: "русский", code: "ru", lang: "Russian" },
  { name: "Française", code: "fr", lang: "French" },
];

const LocaleSelector = ({ value, onChange }) => {
  return (
    <div className="locale-selector">
      <select name="locale" onChange={onChange} defaultValue={value}>
        {localeList.map((locale, index) => (
          <option key={index} value={locale.code}>
            {locale.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocaleSelector;
