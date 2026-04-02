import { useEffect, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const SkylineCity = ({ offset = 0 }) => (
    <g transform={`translate(${offset}, 0)`}>
      {/* TV Tower */}
      <rect x="700" y="20" width="6" height="200" />
      <circle cx="703" cy="60" r="22" />
      <rect x="701" y="10" width="4" height="50" />
      {/* Brandenburg Gate */}
      <rect x="380" y="100" width="8" height="120" />
      <rect x="395" y="100" width="8" height="120" />
      <rect x="410" y="100" width="8" height="120" />
      <rect x="425" y="100" width="8" height="120" />
      <rect x="440" y="100" width="8" height="120" />
      <rect x="370" y="95"  width="90" height="12" />
      <polygon points="370,95 415,70 460,95" />
      {/* Buildings */}
      <rect x="0"    y="140" width="60" height="80" />
      <rect x="65"   y="115" width="40" height="105" />
      <rect x="110"  y="150" width="50" height="70" />
      <rect x="165"  y="125" width="35" height="95" />
      <rect x="205"  y="160" width="55" height="60" />
      <rect x="265"  y="105" width="30" height="115" />
      <rect x="300"  y="138" width="45" height="82" />
      <rect x="350"  y="155" width="22" height="65" />
      <rect x="475"  y="148" width="55" height="72" />
      <rect x="535"  y="128" width="40" height="92" />
      <rect x="580"  y="143" width="50" height="77" />
      <rect x="635"  y="118" width="35" height="102" />
      <rect x="675"  y="155" width="20" height="65" />
      <rect x="715"  y="138" width="45" height="82" />
      <rect x="765"  y="122" width="55" height="98" />
      <rect x="825"  y="150" width="40" height="70" />
      <rect x="870"  y="132" width="30" height="88" />
      <rect x="905"  y="155" width="60" height="65" />
      <rect x="970"  y="118" width="35" height="102" />
      <rect x="1010" y="143" width="50" height="77" />
      <rect x="1065" y="158" width="40" height="62" />
      <rect x="1110" y="128" width="55" height="92" />
      <rect x="1170" y="150" width="30" height="70" />
      <rect x="1205" y="138" width="45" height="82" />
      <rect x="1255" y="118" width="40" height="102" />
      <rect x="1300" y="152" width="60" height="68" />
      <rect x="1365" y="132" width="75" height="88" />
      {/* Ground */}
      <rect x="0" y="218" width="1440" height="4" />
    </g>
  );

  return (
    <>
      <div className="bg-canvas">
        <div className="bg-gradient" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="dots" />

        {/* Scrolling skyline — SVG wide enough for two copies side by side */}
        <div className="skyline-wrap">
          <svg
            className="skyline-svg"
            viewBox="0 0 2880 220"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMax meet"
          >
            <SkylineCity offset={0} />
            <SkylineCity offset={1440} />
          </svg>
        </div>
      </div>

      <div className="container">
        <div className={`content ${visible ? "show" : ""}`}>

          <div className="brand-chip anim-1">
            <span className="chip-dot" />
            Berlin's Student Platform
          </div>

          <h1 className="anim-2">
            Settle<span className="orange">ezy</span>
          </h1>

          <p className="tagline anim-3">Move Smart. Settle Easy.</p>

          <div className="coming-soon-badge anim-4">
            <span className="rocket">🚀</span>
            Coming Soon — Launching in Berlin
          </div>

          <p className="desc anim-5">
            Your all-in-one membership platform — exclusive partner deals,
            student events, settlement support, and a community that has your
            back from day one in Berlin.
          </p>

          <div className="trust-bar anim-5">
            <span className="trust-pill">🎓 5,000+ Students</span>
            <span className="trust-pill">🤝 50+ Verified Partners</span>
            <span className="trust-pill">🏫 10 Universities</span>
            <span className="trust-pill">💰 Avg. €180 Saved/Year</span>
          </div>

          <div className="cta-row anim-6">
            <button
              className="cta cta-primary"
              onClick={() =>
                window.open("https://instagram.com/settleezy.berlin", "_blank")
              }
            >
              Follow for Updates
            </button>
          </div>

        </div>
      </div>
    </>
  );
}