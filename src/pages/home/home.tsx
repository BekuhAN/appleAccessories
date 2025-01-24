import React, { ReactElement } from "react";
import Preview from "../../components/preview/preview";
import Promo from "../../components/promo/promo";
import CategoriesCarousel from "../../components/categories-carousel/categories-carousel";
import ItemsPreview from "../../components/items-preview/items-preview";
import Banner from "../../components/banner/banner";

export default function Home(): ReactElement {
  return (
    <main>
      <Preview />
      <Promo />
      <CategoriesCarousel />
      <ItemsPreview />
      <Banner />
    </main>
  );
}
