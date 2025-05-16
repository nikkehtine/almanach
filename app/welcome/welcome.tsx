import { HomepageLayout } from "~/layouts/homepage-layout";

export function Welcome() {
  return (
    <HomepageLayout>
      <div className="grid h-96 w-full place-content-center bg-[url(valery-fedotov-9F7jQr-kkT0-unsplash.jpg)] bg-cover bg-center bg-no-repeat dark:bg-[url(samuel-angor-NVdhhp95jnA-unsplash.jpg)]">
        <h1 className="text-5xl font-bold">
          Take your notes <br /> to the&nbsp;next level
        </h1>
      </div>
    </HomepageLayout>
  );
}
