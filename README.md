# 🚀 Generative AI Blog by Abhinav

Welcome to **Abhinav's Generative AI Blog**, your go-to destination to start building, writing, and exploring the exciting world of **LLMs, RAG systems, embeddings, fine-tuning**, and more.

Whether you're a beginner or an experienced ML engineer, this blog brings you step-by-step guides, use cases, and career insights from the AI frontier.

![Generative AI Banner](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

---

## 📌 About This Repo

This is more than a blog — it's a **knowledge hub** built using Astro and Markdown. Here, I share everything I learn while experimenting with:

- 🔍 Large Language Models (LLMs)
- 🔗 RAG Architectures & Vector Databases
- 🧠 Fine-Tuning Techniques (LoRA, QLoRA)
- 💬 Prompt Engineering Strategies
- ☁️ Firebase + GCP LLM Integration
- 📊 Resume/Career AI Tools for Job Seekers
- 🛠 Real-World AI Use Cases

---

## 🧠 Tech Stack

| Layer        | Tech                          |
| ------------ | ----------------------------- |
| Frontend     | Astro + TailwindCSS           |
| Content      | Markdown (.md)                |
| Auth & DB    | Firebase Auth + Firestore     |
| Deployment   | Firebase Hosting / GitHub Pages |
| LLM          | Vertex AI + Gemini 1.0 Pro    |
| Bonus        | LangChain, Redis, PGVector    |

---

## 📁 Project Structure

```bash
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── BlogLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   └── blog/
│   │       ├── llm-intro.md
│   │       ├── rag-architecture.md
│   │       ├── fine-tune-lora.md
│   │       └── firebase-llm.md
└── package.json

```


🧞 Available Commands

Command	Action
npm install	Install dependencies
npm run dev	Start dev server at localhost:4321
npm run build	Build the site to ./dist
npm run preview	Preview the production build
🚀 Deployment


✅ Firebase Hosting
bash
Copy
Edit
npm install -g firebase-tools
firebase login
firebase init
npm run build
firebase deploy


✅ GitHub Pages
Update your astro.config.mjs:

js
Copy
Edit
import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  output: 'static',
  base: '/your-repo-name/',
  integrations: [github()],
});
🔗 Resources
📘 Astro Documentation

🔥 Firebase Hosting Docs

☁️ Vertex AI - Gemini API

🔗 LangChain Documentation

🙋‍♂️ About Abhinav
I'm Abhinav, a passionate Generative AI explorer building solutions with LLMs, vector search, RAG pipelines, and cloud-native tools like Firebase + GCP. This blog is where I document my journey, learn in public, and help others grow.

🌐 LinkedIn :  https://www.linkedin.com/in/abhinav-kanduri-a943b9353/

✉️ abhinav.kanduri01@gmail.com

🧠 License
MIT License – use it, improve it, share it.

Start your journey in Generative AI with me. Let’s build the future together.

python
Copy
Edit

---

✅ Let me know if you'd like:
- An `index.astro` homepage for this blog
- A starter blog post like `firebase-llm.md`
- Deployment support or custom domain setup

I'm here to help you launch this smoothly 🚀