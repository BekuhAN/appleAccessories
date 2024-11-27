import React, { ReactElement } from "react";
import Preview from "../../components/preview/preview";
import Promo from "../../components/promo/promo";
import CategoriesCarousel from "../../components/categories-carousel/categories-carousel";

export default function Home(): ReactElement {
  return (
    <main>
      <Preview />
      <Promo />
      <CategoriesCarousel />
    </main>
  );
}
