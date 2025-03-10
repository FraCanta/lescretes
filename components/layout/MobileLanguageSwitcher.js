import { useState } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

const MobileLanguageSwitcher = () => {
  const router = useRouter();
  const { locale, asPath } = router;
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "it", label: "It - Italian" },
    { code: "en", label: "EN - English" },
    { code: "fr", label: "FR - French" },
    { code: "de", label: "DE - German" },
    { code: "ko", label: "KO - Korean" },
    { code: "jp", label: "JP - Japanese" },
    { code: "ru", label: "RU - Russian" },
    { code: "zh", label: "ZH - Chinese" },
  ];

  const selectedLanguage = languages.find((lang) => lang.code === locale);

  const switchLanguage = (newLocale) => {
    if (newLocale === locale) return;
    setIsOpen(false);
    router.push(asPath, asPath, { locale: newLocale });
  };

  return (
    <div className="relative">
      {/* Bottone con icona globo + lingua attuale */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 space-x-2 text-sm font-regular text-main "
      >
        <span className="flex items-center gap-2 text-lg">
          <Icon icon="mdi:web" className="w-5 h-5" /> {selectedLanguage?.label}
        </span>
        <Icon icon="mdi:chevron-down" className="w-6 h-6 text-main" />
      </button>

      {/* Dropdown delle lingue */}
      {isOpen && (
        <div className="absolute right-0 z-50 w-full py-4 mt-2 bg-white rounded-md shadow-lg ring-1 ring-main ring-opacity-5">
          {languages.map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => switchLanguage(code)}
              className="flex items-center w-full px-4 py-2 text-lg hover:bg-gray-100"
            >
              <Icon icon={flag} className="w-5 h-5 mr-2" />
              {label}
              {locale === code && (
                <Icon
                  icon="mdi:check"
                  className="w-4 h-4 ml-auto text-green-600"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileLanguageSwitcher;
