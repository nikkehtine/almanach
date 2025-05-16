import { NavLink } from "react-router";
import { Button, buttonVariants } from "~/components/ui/button";

import { cn } from "~/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
];

export function MyAppNav({ className }: { className?: string }) {
  return (
    <nav className={cn("flex gap-3 p-4 select-none", className)}>
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            cn(
              buttonVariants({ variant: "link" }),
              "px-2 py-1",
              isActive ? "pointer-events-none" : "opacity-75",
            )
          }
        >
          {link.label}
        </NavLink>
      ))}
      <div className="w-full">&nbsp;</div>
      <NavLink
        key="app"
        to="/app"
        className={cn(buttonVariants({ variant: "default" }), "bg-blue-400")}
      >
        Open App
      </NavLink>
    </nav>
  );
}
