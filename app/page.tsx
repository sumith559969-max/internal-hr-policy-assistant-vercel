"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v5.0/inject.js";
    script1.async = true;

    script1.onload = () => {
      const script2 = document.createElement("script");
      script2.src =
        "https://files.bpcontent.cloud/2026/09/15/12/20260915121031-K9U9VQIN.js";
      script2.defer = true;

      document.body.appendChild(script2);
    };

    document.body.appendChild(script1);

    return () => {
      script1.remove();
    };
  }, []);

  return (
    <main
      style={{
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <div
        id="bp-embedded-webchat"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
        }}
      />
    </main>
  );
}
