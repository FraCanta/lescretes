import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale } = router; // ottieni la lingua corrente dal router

  return (
    <div>
      <select
        className="font-normal bg-white border-b text-main"
        value={locale} // imposta il valore della select sulla lingua corrente
        onChange={(e) =>
          router.push(
            {
              pathname: router.pathname,
              query: router.query,
            },
            null,
            { locale: e.target.value } // cambia la lingua
          )
        }
      >
        <option value="it">IT</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
}
