const baseURL = "https://robgol.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const learningSection = document.querySelector('.card ul');
    learningSection.innerHTML = "";  // Limpa conteúdo existente

    weeks.forEach(week => {
        const weekItem = document.createElement("li");
        weekItem.innerHTML = `${week.week}: `;

        week.links.forEach((link, index) => {
            const activityLink = document.createElement("a");
            activityLink.href = `${baseURL}${link.url}`;
            activityLink.target = "_blank";
            activityLink.textContent = link.title;

            weekItem.appendChild(activityLink);

            // Adiciona separador para múltiplos links
            if (index < week.links.length - 1) {
                weekItem.innerHTML += " | ";
            }
        });

        learningSection.appendChild(weekItem);
    });
}

getLinks();
