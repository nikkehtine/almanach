import { NavLink } from "react-router";

import { cn } from "~/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
];

export function MyAppNav({ className }: { className?: string }) {
  return (
    <nav className={cn("flex gap-3 p-4", className)}>
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `hover:underline ${isActive ? "pointer-events-none text-gray-300" : ""}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
