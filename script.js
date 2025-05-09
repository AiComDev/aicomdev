const texts = {
    ru: {
        services: "Услуги",
        projects: "Проекты",
        contact: "Контакты"
    },
    en: {
        services: "Services",
        projects: "Projects",
        contact: "Contact"
    },
    kz: {
        services: "Қызметтер",
        projects: "Жобалар",
        contact: "Байланыс"
    }
};

function changeLanguage(language) {
    document.querySelector('#services .section-title').innerText = texts[language].services;
    document.querySelector('#projects .section-title').innerText = texts[language].projects;
    document.querySelector('#contact .section-title').innerText = texts[language].contact;
}