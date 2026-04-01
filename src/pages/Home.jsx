import { useEffect, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <div className="container">
      <div className={`content ${visible ? "show" : ""}`}>
        <h1>Settleezy</h1>
        <p className="tagline">Move Smart. Settle Easy.</p>

        <h2>Coming Soon 🚀</h2>

        <p className="desc">
          Your all-in-one platform to discover deals, attend events, and
          settle smoothly in a new city.
        </p>
      </div>
    </div>
  );
}