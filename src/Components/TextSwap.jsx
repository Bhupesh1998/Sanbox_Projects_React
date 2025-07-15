import React, { useState } from "react";

function TextSwap() {
  const [swapped, setSwapped] = useState(false);
  const tags = [<h1>Text 1</h1>, <div>Text 2</div>];
  return (
    <div>
      <p>Swap the text</p>
      {swapped ? tags.reverse() : tags}
      <button onClick={() => setSwapped(!swapped)}>Swap Text</button>
    </div>
  );
}

export default TextSwap;
