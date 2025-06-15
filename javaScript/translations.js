document.addEventListener("DOMContentLoaded", () => {
  const translations = [
    {
      key: "role",
      en: "Administrative Assistant & App Developer",
      es: "Asistente Administrativo y Desarrollador de Apps",
      de: "Verwaltungsassistent & App-Entwickler"
    },
    {
      key: "fp-link",
      en: "See my Developer Formation",
      es: "Ver mi Formación DAM",
      de: "Siehe meine Entwickler-Ausbildung"
    },
    {
      key: "github",
      en: "My github",
      es: "Mi github",
      de: "Mein Github"
    },
    {
      key: "writtenBy",
      en: "Written by",
      es: "Escrito por",
      de: "Geschrieben von"
    },
    {
      key: "contact",
      en: "Contact me:",
      es: "Contáctame:",
      de: "Kontaktiere mich:"
    }
  ];

  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang") || "en";

  translations.forEach(item => {
    const el = document.getElementById(item.key);
    if (el && item[lang]) {
      el.textContent = item[lang];
    }
  });
});
