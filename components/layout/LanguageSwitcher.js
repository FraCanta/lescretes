import { useState } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, asPath } = router;
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "it", label: "IT" },
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "de", label: "DE" },
    { code: "ko", label: "KO" },
    { code: "jp", label: "JP" },
    { code: "ru", label: "RU" },
    { code: "zh", label: "ZH" },
  ];

  const selectedLanguage = languages.find((lang) => lang.code === locale);

  const switchLanguage = (newLocale) => {
    if (newLocale === locale) return;
    setIsOpen(false);
    router.push(asPath, asPath, { locale: newLocale });
  };

  return (
    <div className="relative inline-block text-left">
      {/* Bottone principale */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-full gap-2 text-base border-b font-regular text-main"
      >
        <Icon icon="material-symbols-light:language" width="24" height="24" />
        {selectedLanguage?.label}
        <Icon icon="mdi:chevron-down" className="w-5 h-5" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 z-50 w-48 mt-2 bg-white rounded-md shadow-lg ring-1 ring-main ring-opacity-5">
          <div className="grid grid-cols-1 gap-2 py-1">
            {languages.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => switchLanguage(code)}
                className={`flex items-center justify-between w-full px-4 py-2 text-sm text-left`}
              >
                <span>{label}</span>
                {locale === code && (
                  <Icon icon="mdi:check" className="w-4 h-4 text-main" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
