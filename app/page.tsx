"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Load Botpress Webchat loader
    const injectScript = document.createElement("script");
    injectScript.src =
      "https://cdn.botpress.cloud/webchat/v5.0/inject.js";
    injectScript.async = true;

    injectScript.onload = () => {
      // Open the embedded chatbot as soon as it is initialized
      if (window.botpress) {
        window.botpress.on("webchat:initialized", () => {
          window.botpress.open();
        });
      }

      // Load your current Botpress configuration
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
        position: "relative",
        background: "#ffffff",
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

      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        #__next {
          width: 100%;
          height: 100%;
        }

        #bp-embedded-webchat {
          position: relative;
          width: 100%;
          height: 100vh;
        }

        #bp-embedded-webchat .bpFab {
          display: none !important;
        }

        #bp-embedded-webchat .bpWebchat {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100% !important;
          height: 100% !important;
          max-width: 100% !important;
          max-height: 100% !important;
          border-radius: 0 !important;
        }
      `}
      </style>
    </main>
  );
}
