const languageSelect = document.getElementById("languageSelect");
const fetchBtn = document.getElementById("fetchBtn");
const refreshBtn = document.getElementById("refreshBtn");

const status = document.getElementById("status");
const loader = document.getElementById("loader");

const repoCard = document.getElementById("repoCard");
const nameEl = document.getElementById("name");
const descEl = document.getElementById("description");
const starsEl = document.getElementById("stars");
const forksEl = document.getElementById("forks");
const issuesEl = document.getElementById("issues");

async function fetchRepo() {
    const language = languageSelect.value;

    if (!language) {
        status.textContent = "Please select a language.";
        return;
    }

  // UI states
    status.textContent = "";
    loader.classList.remove("hidden");
    repoCard.classList.add("hidden");
    refreshBtn.classList.add("hidden");
    fetchBtn.disabled = true;

    try {
        const response = await fetch(
            `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=50`
    );

    if (!response.ok) {
        throw new Error("API error");
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
        status.textContent = "No repositories found.";
        return;
    }

    const randomIndex = Math.floor(Math.random() * data.items.length);
    const repo = data.items[randomIndex];

    displayRepo(repo);

    refreshBtn.classList.remove("hidden");

    } catch (error) {
        status.textContent = "⚠️ Something went wrong.";
        console.error(error);
    } finally {
        loader.classList.add("hidden");
        fetchBtn.disabled = false;
    }
}

function displayRepo(repo) {
    nameEl.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
    descEl.textContent = repo.description || "No description available.";
    starsEl.textContent = repo.stargazers_count;
    forksEl.textContent = repo.forks_count;
    issuesEl.textContent = repo.open_issues_count;

    repoCard.classList.remove("hidden");
}

fetchBtn.addEventListener("click", fetchRepo);
refreshBtn.addEventListener("click", fetchRepo);

