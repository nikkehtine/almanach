import type { Route } from "./+types/home";
import { Welcome } from "~/welcome/welcome";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "About Almanach" },
        { name: "description", content: "Open source note taking app" },
    ];
}

export default function About() {
    return <Welcome />;
}
