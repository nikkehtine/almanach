import type { Route } from "./+types/home";
import { Welcome } from "~/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Almanach" },
    { name: "description", content: "Open source note taking app" },
  ];
}

export default function Home() {
  return <Welcome />;
}
