# Almanach

Lorem ipsum dolor sit amet

## TO DO

- [ ] To Do app
- [ ] Use state management solution (Zustand or Jotai)
- [ ] Database and authentication (Supabase)
- [x] Routing (React Router)
- [x] Tailwind + Shadcn
- [ ] Add notes
- [ ] Markdown renderer
- [ ] Code block highlighting (rehype-highlight)
- [ ] Color theme (Ayu, Tokyo Night, Catppuccin, Winter Is Coming)
- [ ] Font (Fira + Fira Mono, Roboto + Roboto Mono, Lato Inconsolata)
- [ ] Drag and drop for reordering
- [ ] Hotkeys (react-hotkeys-hook | ctrl+k search, ctrl+shift+p command pallette)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

### Credits

- Light version homepage background image by [Valery Fedotov](https://unsplash.com/@imlst) on [Unsplash](https://unsplash.com/photos/silver-macbook-beside-black-iphone-5-9F7jQr-kkT0)
- Dark version homepage background image by [Samuel Angor](https://unsplash.com/@sammysays___) on [Unsplash](https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-desk-NVdhhp95jnA)

Images use the royaty-free [Unsplash License](https://unsplash.com/license)

---

Built with ❤️ using React Router.
