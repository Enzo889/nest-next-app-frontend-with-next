import React from "react";
import { getCart, Letter } from "../cart/cart.api";
import LetterCard from "@/components/letter-card";

async function CollagueLetters() {
  const letters = await getCart();

  return (
    <div>
      {" "}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-5">
        {letters.map((letter: Letter) => (
          // @ts-expect-error should be fine
          <LetterCard key={letter.id} letter={letter} />
        ))}
      </div>
    </div>
  );
}

export default CollagueLetters;
