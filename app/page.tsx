export default function Home() {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#ffffff",
      }}
    >
      <iframe
        src="https://cdn.botpress.cloud/webchat/v5.0/shareable.html?configUrl=https://files.bpcontent.cloud/2026/09/15/12/20260915121031-ARGEEJLS.json"
        title="Internal HR Policy Assistant"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
        }}
        allow="microphone"
      />
    </main>
  );
}
