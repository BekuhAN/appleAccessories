import React, { ReactElement } from "react";
import Preview from "../../components/preview/preview";
import Promo from "../../components/promo/promo";

export default function Home(): ReactElement {
  return (
    <main>
      <Preview />
      <Promo />
    </main>
  );
}
