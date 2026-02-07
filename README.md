# Jeffrey Fernandez — Software Engineer Portfolio

> Personal portfolio website built with Next.js, Chakra UI, Three.js, and Framer Motion — showcasing software engineering projects, professional experience, and technical skills. Features live GitHub integration that dynamically displays repositories and highlights featured projects tagged with a custom topic.

🌐 **Live Site:** [jeffreys-java-portfolio.vercel.app](https://jeffreys-java-portfolio.vercel.app)

---

## About Me

Hi, I'm **Jeffrey Fernandez** — a Software Engineer currently working at **JPMorgan Chase**, where I build secure, accessible, and scalable web experiences in React and TypeScript for millions of Sapphire Reserve customers across mobile, tablet, and desktop platforms.

I'm also the **Founder & Lead Software Engineer** at **JFM Capital Group LLC (PurePay)**, where I architect scalable web ecosystems using Next.js and AWS.

- 🎓 Pursuing a BS in Computer Science & Information Security at **John Jay College (CUNY)**
- ☁️ AWS Certified Cloud Practitioner
- 🚀 Former NASA Summer Research Intern (CCRI — Volcanic Emission Impacts)

---

## Tech Stack

| Layer        | Technologies                                                             |
|-------------|-------------------------------------------------------------------------|
| **Framework**   | [Next.js](https://nextjs.org/) — React framework with SSR, SSG, and route pre-fetching |
| **UI**          | [Chakra UI](https://chakra-ui.com/) — Accessible, modular React component library       |
| **3D**          | [Three.js](https://threejs.org/) — 3D rendering for interactive visuals                  |
| **Animation**   | [Framer Motion](https://www.framer.com/motion/) — Production-ready React animations      |
| **Deployment**  | [Vercel](https://vercel.com/) — Optimized hosting for Next.js                            |
| **Analytics**   | [Vercel Analytics](https://vercel.com/analytics) — Privacy-friendly web analytics         |

---

## GitHub Featured Projects

The portfolio includes a **GitHub Featured Projects** section that automatically highlights repositories tagged with the `jeffreys_repo` topic. This allows you to curate which GitHub repositories appear in the featured section directly from GitHub — no code changes needed.

### How It Works

1. Go to any GitHub repository you want to feature.
2. Click **Settings** → Under **General**, find the **Topics** field.
3. Add the topic `jeffreys_repo` and save.
4. The portfolio will automatically pick up the tagged repo and display it in the **GitHub Featured Projects** section above the full repository list.

This is a clean, maintainable approach — it uses GitHub's existing topic/tagging system as a lightweight CMS, keeping the portfolio content in sync with your GitHub presence without hardcoding repository names.

---

## Featured Projects

| Project | Description |
|---------|-------------|
| **PurePay** | Comprehensive backend payment infrastructure for jewelry store layaway management, integrating Stripe Connect |
| **Dictator AI** | Turn any PDF into an interactive audio experience with real-time text syncing |
| **MERRA-2 NetCDF Plotting** | Data visualization tool for plotting graphs from NASA MERRA-2 NetCDF files using Python |
| **Virus Building Simulation** | Python simulation that graphs the state of each individual in a building during a virus outbreak |
| **MNIST Neural Networks** | Image classification baseline using the MNIST dataset with neural networks |

---

## Project Structure

```
$PROJECT_ROOT
├── pages          # Next.js page routes and API endpoints
├── components     # Reusable React UI components and layouts
├── lib            # Non-React modules (theme config, 3D model loader)
└── public         # Static assets — images, fonts, 3D models, resume PDF
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start the production server
npm start
```

---

## Connect

- 💼 [LinkedIn](https://linkedin.com/in/jeffrey-fernandez-66857b269)
- 🐙 [GitHub](https://github.com/wiggapony0925)
- 🐦 [Twitter/X](https://twitter.com/JeffreyF0925)
- 📧 [ninjeff06@gmail.com](mailto:ninjeff06@gmail.com)

---

## Publishing to GitHub Packages

This project is configured to publish to the [GitHub Packages npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry).

### Authentication

Authenticate using a personal access token (classic) with at least `read:packages` and `write:packages` scopes:

```bash
npm login --scope=@wiggapony0925 --auth-type=legacy --registry=https://npm.pkg.github.com
```

Or add the following to your `~/.npmrc`:

```
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

### Publishing

```bash
npm publish
```

### Installing as a Dependency

Add the scoped package to your project:

```bash
npm install @wiggapony0925/jeffrey-fernandez-portfolio
```

Ensure your project's `.npmrc` includes:

```
@wiggapony0925:registry=https://npm.pkg.github.com
```

---

## License

This project is proprietary. © 2025 Jeffrey Fernandez. All Rights Reserved.

