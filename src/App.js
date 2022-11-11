import { useState } from "react";
import ProductInfo from "./ProductInfo";

function App() {
  const [light, setLight] = useState(false);

  return (
    <div className="App">
      <h1>Switch on or Off the bulb</h1>
      <div>
        {light == false ? (
          <img src="./lightoff.png" alt="asa" width="480px" />
        ) : (
          <img src="./lighton.png" alt="as" width="480px" />
        )}
      </div>
      <div>
        <button type="button" onClick={() => setLight(!light)}>
          Light On/Off
        </button>
      </div>
      <ProductInfo name="Adidas Shoe" price="129.99" description="some desc" />
    </div>
  );
}

export default App;
