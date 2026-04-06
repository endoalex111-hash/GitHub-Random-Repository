# GitHub-Random-Repository
Solution for GitHub Random Repository in Roadmap.sh
Project URL: https://roadmap.sh/projects/github-random-repo

# 🚀 GitHub Repository Finder

A modern and responsive web application that allows users to discover random GitHub repositories based on their preferred programming language.

This project demonstrates working with external APIs, asynchronous JavaScript, and dynamic UI state management.

---

## ✨ Features

* 🔍 Select a programming language from a dropdown
* 🎲 Fetch a random repository using GitHub Search API
* 📊 Display repository details:

  * Name (clickable)
  * Description
  * ⭐ Stars
  * 🍴 Forks
  * 🐞 Open Issues
* 🔄 Refresh button to load another repository
* ⏳ Loading spinner for better UX
* ⚠️ Error and empty state handling
* 📱 Fully responsive design (mobile, tablet, desktop)

---

## 🛠️ Technologies Used

* HTML5
* CSS3 (Flexbox + Responsive Design)
* JavaScript (ES6+)
* GitHub REST API

---

## 📦 How It Works

1. User selects a programming language
2. App sends a request to GitHub API:

   ```
   https://api.github.com/search/repositories?q=language:{language}&sort=stars&order=desc
   ```
3. A random repository is selected from results
4. Data is displayed dynamically in the UI

---

## ⚙️ Installation & Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/endoalex111-hash/GitHub-Random-Repository.git
   ```

2. Navigate into the project:

   ```bash
   cd github-repo-finder
   ```

3. Open `index.html` in your browser

---

## 📁 Project Structure

```
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

If you’d like to improve this project, feel free to fork the repo and submit a pull request.

---

## 📧 Contact

For permissions, collaborations, or inquiries:

📩 **[endoalex111@gmail.com](mailto:endoalex111@gmail.com)**

---

## ⚠️ License Notice

This project is protected by a custom license.
You are **not allowed to use this project for commercial purposes** without explicit permission.

See the LICENSE file for full details.

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

