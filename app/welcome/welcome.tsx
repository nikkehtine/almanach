import { HomepageLayout } from "~/layouts/homepage-layout";

export function Welcome() {
  return (
    <HomepageLayout>
      <div className="relative h-96 w-full cursor-default bg-[url(valery-fedotov-9F7jQr-kkT0-unsplash.jpg)] bg-cover bg-center bg-no-repeat dark:bg-[url(samuel-angor-NVdhhp95jnA-unsplash.jpg)]">
        <div className="absolute grid h-full w-full place-content-center bg-black/33 dark:bg-black/50">
          <h1 className="text-center text-4xl font-bold text-gray-200 md:text-5xl md:leading-14">
            Take your notes <br /> to the&nbsp;next level
          </h1>
        </div>
      </div>
    </HomepageLayout>
  );
}
