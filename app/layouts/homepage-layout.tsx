import { MyAppNav } from "./homepage-layout/navbar";

export function HomepageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MyAppNav />
      <main className="flex flex-col items-center justify-center">
        {children}
      </main>
    </>
  );
}
