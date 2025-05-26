<h1 align="center">🚀 Node.js App CI/CD with GitHub Actions & Docker</h1>

<p align="center">
  <img src="https://img.shields.io/github/workflow/status/yourusername/yourrepo/CI/CD%20Pipeline?label=CI%2FCD&logo=githubactions&style=for-the-badge" alt="Build Status"/>
  <img src="https://img.shields.io/docker/pulls/yourusername/my-node-app?style=for-the-badge&logo=docker" alt="Docker Pulls"/>
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/your-image-id/project-preview.gif" alt="Project Preview" width="600"/>
</p>

<hr>

<h2>📦 Project Overview</h2>

<p>This is a simple Node.js application containerized using Docker and deployed automatically using a GitHub Actions CI/CD pipeline. On every push to the <code>main</code> branch, the app is built into a Docker image and pushed to DockerHub.</p>

---

<h2>🛠️ Tech Stack</h2>

<ul>
  <li>Node.js + Express</li>
  <li>Docker</li>
  <li>GitHub Actions</li>
  <li>DockerHub</li>
</ul>

---

<h2>📁 Folder Structure</h2>

<pre>
.
├── index.js                 # Express app
├── Dockerfile              # Docker config
├── package.json            # Dependencies
└── .github/
    └── workflows/
        └── main.yml        # GitHub Actions pipeline
</pre>

---

<h2>📸 CI/CD Pipeline Overview</h2>

<p align="center">
  <img src="https://user-images.githubusercontent.com/your-image-id/cicd-pipeline-diagram.png" alt="CI/CD Diagram" width="600"/>
</p>

<ol>
  <li>Push code to GitHub (main branch)</li>
  <li>GitHub Actions triggers CI/CD workflow</li>
  <li>Docker image is built and pushed to DockerHub</li>
  <li>Image available for deployment anywhere (VM, cloud, etc.)</li>
</ol>

---

<h2>🚀 Run Locally</h2>

<h3>Without Docker:</h3>

```bash
npm install
node index.js

