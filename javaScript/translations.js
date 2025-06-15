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

      // Nuevas claves para la página DAM
  {
    key: "title",
    en: "Higher Technician in Multiplatform Application Development (DAM)",
    es: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
    de: "Staatlich geprüfter Techniker für Multiplattform-Anwendungsentwicklung (DAM)"
  },
  {
    key: "institution",
    en: "Institution:",
    es: "Institución:",
    de: "Institution:"
  },
  {
    key: "institutionName",
    en: "CIDEAD (Center for Innovation and Development of Distance Education)",
    es: "CIDEAD (Centro para la Innovación y el Desarrollo de la Educación a Distancia)",
    de: "CIDEAD (Zentrum für Innovation und Entwicklung des Fernunterrichts)"
  },
  {
    key: "graduationYear",
    en: "Graduation Year:",
    es: "Año de Graduación:",
    de: "Abschlussjahr:"
  },
  {
    key: "level",
    en: "Level:",
    es: "Nivel:",
    de: "Niveau:"
  },
  {
    key: "levelDescription",
    en: "Higher Vocational Training (EQF Level 5)",
    es: "Formación Profesional Superior (Nivel EQF 5)",
    de: "Höhere Berufsbildung (EQF Stufe 5)"
  },
  {
    key: "acquiredCompetencies",
    en: "Acquired Competencies",
    es: "Competencias adquiridas",
    de: "Erworbene Kompetenzen"
  },

  // Competencias individuales
  {
    key: "competency1",
    en: "Develop multiplatform applications with database access.",
    es: "Desarrollar aplicaciones multiplataforma con acceso a bases de datos.",
    de: "Multiplattform-Anwendungen mit Datenbankzugriff entwickeln."
  },
  {
    key: "competency2",
    en: "Create efficient and user-friendly graphical user interfaces (GUIs).",
    es: "Crear interfaces gráficas de usuario (GUI) eficientes y fáciles de usar.",
    de: "Effiziente und benutzerfreundliche grafische Benutzeroberflächen (GUIs) erstellen."
  },
  {
    key: "competency3",
    en: "Use version control systems such as Git.",
    es: "Usar sistemas de control de versiones como Git.",
    de: "Versionskontrollsysteme wie Git verwenden."
  },
  {
    key: "competency4",
    en: "Apply OOP, design patterns, and best practices.",
    es: "Aplicar POO, patrones de diseño y buenas prácticas.",
    de: "OOP, Design Patterns und Best Practices anwenden."
  },
  {
    key: "competency5",
    en: "Consume web services and REST APIs.",
    es: "Consumir servicios web y APIs REST.",
    de: "Webservices und REST-APIs nutzen."
  },
  {
    key: "competency6",
    en: "Develop mobile apps for Android.",
    es: "Desarrollar aplicaciones móviles para Android.",
    de: "Mobile Apps für Android entwickeln."
  },
  {
    key: "competency7",
    en: "Manage SQL and NoSQL databases.",
    es: "Gestionar bases de datos SQL y NoSQL.",
    de: "SQL- und NoSQL-Datenbanken verwalten."
  },
  {
    key: "competency8",
    en: "Implement security measures in software development.",
    es: "Implementar medidas de seguridad en el desarrollo de software.",
    de: "Sicherheitsmaßnahmen in der Softwareentwicklung umsetzen."
  },

  {
    key: "officialLink",
    en: "Official link",
    es: "Enlace oficial",
    de: "Offizieller Link"
  },
  {
    key: "backToHome",
    en: "⬅️ Back to home",
    es: "⬅️ Volver al inicio",
    de: "⬅️ Zurück zur Startseite"
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
