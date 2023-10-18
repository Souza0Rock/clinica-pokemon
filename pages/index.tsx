import BaseLayout from "../components/common/BaseLayout";
import HomeIntrodution from "../components/sections/HomeIntrodution";

export default function Home() {
  return (
    <BaseLayout
      pageTitle="Home"
      centerChildVertically
      backgroundImage="/images/pokemon-hero.jpg"
    >
      <HomeIntrodution />
    </BaseLayout>
  );
}
