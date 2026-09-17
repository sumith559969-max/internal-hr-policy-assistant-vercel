import Script from "next/script";

export default function Home() {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
        minHeight: "100vh",
        background: "#ffffff",
      }}
    >
      <Script
        src="https://cdn.botpress.cloud/webchat/v5.0/inject.js"
        strategy="afterInteractive"
      />

      <Script
        src="https://files.bpcontent.cloud/2026/09/15/12/20260915121031-K9U9VQIN.js"
        strategy="afterInteractive"
      />
    </main>
  );
}
