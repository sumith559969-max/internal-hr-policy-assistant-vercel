"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const inject = document.createElement("script");
    inject.src = "https://cdn.botpress.cloud/webchat/v5.0/inject.js";
    inject.async = true;

    inject.onload = () => {
      const botpress = document.createElement("script");

      botpress.textContent = `
        window.botpress.init({
          "botId": "fde5f523-c346-4937-a7f0-d725ffc0c611",
          "configuration": {
            "version": "v2",
            "website": {},
            "email": {},
            "phone": {},
            "termsOfService": {},
            "privacyPolicy": {},
            "feedbackEnabled": true,
            "footer": "[⚡ by Botpress](https://botpress.com/?from=webchat)",
            "allowFileUpload": true,
            "soundEnabled": true,
            "embeddedChatId": "bp-embedded-webchat",
            "conversationHistory": true,
            "homePageEnabled": true,
            "welcomeHeading": "Hi there, how can we help?",
            "welcomeSubtitle": "Tap a starting point or ask in your own words.",
            "conversationStartersEnabled": true,
            "conversationStarters": [
              {
                "id": "workplace_concern",
                "text": "Report workplace concern",
                "title": "Report workplace concern",
                "enabled": true
              },
              {
                "id": "leave_request",
                "text": "Discuss leave request",
                "title": "Discuss leave request",
                "icon": "file-text",
                "enabled": true
              },
              {
                "id": "pay_question",
                "text": "Resolve pay question",
                "title": "Resolve pay question",
                "icon": "wallet",
                "enabled": true
              },
              {
                "id": "policy_exception",
                "text": "Request policy exception",
                "title": "Request policy exception",
                "enabled": true
              }
            ],
            "conversationStartersDisplayStyle": "cards",
            "citationsEnabled": true,
            "agentPresenceEnabled": true
          },
          "clientId": "58ba9b04-5437-42dd-ab1f-90d7ea4efc4f"
        });
      `;

      document.body.appendChild(botpress);
    };

    document.body.appendChild(inject);

    return () => {
      inject.remove();
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
          minHeight: "100vh",
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

        #bp-embedded-webchat {
          width: 100% !important;
          height: 100vh !important;
          min-height: 100vh !important;
        }

        #bp-embedded-webchat .bpWebchat {
          width: 100% !important;
          height: 100% !important;
          max-width: none !important;
          max-height: none !important;
          position: absolute !important;
          inset: 0 !important;
          border-radius: 0 !important;
        }

        #bp-embedded-webchat .bpFab {
          display: none !important;
        }
      `}</style>
    </main>
  );
}
