"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v5.0/inject.js";
    injectScript.async = true;

    injectScript.onload = () => {
      const configScript = document.createElement("script");
      configScript.src =
        "https://files.bpcontent.cloud/2026/09/15/12/20260915121031-K9U9VQIN.js";
      configScript.defer = true;

      document.body.appendChild(configScript);
    };

    document.body.appendChild(injectScript);

    return () => {
      injectScript.remove();
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
          width: "100%",
          height: "100vh",
        }}
      />
    </main>
  );
}
