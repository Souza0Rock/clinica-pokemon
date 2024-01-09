import React from "react";
import BaseLayout from "../../components/common/BaseLayout";
import AboutUsDescription from "../../components/sections/AboutUsDescription";

export default function AboutUs() {
  return (
    <BaseLayout pageTitle="Quem somos" showBanner>
      <AboutUsDescription />
    </BaseLayout>
  );
}
