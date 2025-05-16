import type { Route } from "./+types/home";
import { AboutPage } from "~/welcome/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Almanach" },
    { name: "description", content: "Open source note taking app" },
  ];
}

export default function About() {
  return <AboutPage />;
}
