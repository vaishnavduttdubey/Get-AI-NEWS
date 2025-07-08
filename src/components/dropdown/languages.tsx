import { useState } from "react";
import Select from "react-select";
import { Languages } from "@/constants/languages";
import { Styles } from "@/constants/styles";

interface LanguageOption {
  id: number;
  name: string;
  label: string;
  value: string;
}

interface LanguageDropDownProps {
  /** Called when a language is selected */
  onLanguageChange: (lang: LanguageOption) => void;
}

const options: LanguageOption[] = Languages.map((lang) => ({
  id: lang.id,
  name: lang.name,
  label: lang.label,
  value: lang.value,
}));

const LanguageDropDown: React.FC<LanguageDropDownProps> = ({
  onLanguageChange,
}) => {
  const [selectedLang, setSelectedLang] = useState<LanguageOption>(options[0]);

  const handleChange = (lang: LanguageOption | null) => {
    if (lang) {
      setSelectedLang(lang);
      onLanguageChange(lang);
    }
  };

  return (
    <div className="min-w-[180px]">
      <Select
        value={selectedLang}
        onChange={handleChange}
        options={options}
        styles={Styles}
        isSearchable={false}
      />
    </div>
  );
};

export default LanguageDropDown;
