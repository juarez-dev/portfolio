// translations.js
document.addEventListener("DOMContentLoaded", function () {
    // Text definition in diferent languages
    const translations = {
        en: {
            name: "Ismael Juarez Garcia",
            role: "Technician in Administration and Finance & App Developer",
            github: "My GitHub",
            contact: "Contact me:",
            writtenBy: "Written by",
        },
        es: {
            name: "Ismael Juárez García",
            role: "Técnico en Administración y Finanzas & Desarrollador de Apps",
            github: "Mi GitHub",
            contact: "Contáctame:",
            writtenBy: "Escrito por",
        },
        de: {
            name: "Ismael Juarez Garcia",
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
    document.getElementById("name").textContent = translations[lang].name;
    document.getElementById("role").textContent = translations[lang].role;
    document.getElementById("github").textContent = translations[lang].github;
    document.getElementById("contact").textContent = translations[lang].contact;
    document.getElementById("writtenBy").textContent = translations[lang].writtenBy;
});
