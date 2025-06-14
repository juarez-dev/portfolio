// translations.js
document.addEventListener("DOMContentLoaded", function () {
    // Text definition in diferent languages
    const translations = {
        en: {
            fp-link: "📘 See my Developer Formation",
            role: "Technician in Administration and Finance & App Developer",
            github: "My GitHub",
            contact: "Contact me:",
            writtenBy: "Written by",
        },
        es: {
            fp-link: "📘 Ver mi Formacion DAM",
            role: "Técnico en Administración y Finanzas & Desarrollador de Apps",
            github: "Mi GitHub",
            contact: "Contáctame:",
            writtenBy: "Escrito por",
        },
        de: {
            fp-link: "📘 See my Developer Formation",
            role: "Fachkraft für Verwaltung und Finanzen & App-Entwickler",
            github: "Mein GitHub",
            contact: "Kontaktiere mich:",
            writtenBy: "Geschrieben von",
        }
    };

    // Obtain the language to the URL
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang") || "en"; // Default: inglés

    // Aplicar traducciones
    document.getElementById("role").textContent = translations[lang].role;
    document.getElementById("github").textContent = translations[lang].github;
    document.getElementById("contact").textContent = translations[lang].contact;
    document.getElementById("writtenBy").textContent = translations[lang].writtenBy;
});
