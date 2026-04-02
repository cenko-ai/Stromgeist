import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Affiliate-Hinweis | Stromgeist",
};

export default function Affiliate() {
  return (
    <ArticleLayout>
      <h1>Affiliate-Hinweis</h1>
      <div className="article-byline">Transparenz über kommerzielle Verlinkungen</div>
      <div className="article-content">
        <h2>Was sind Affiliate-Links?</h2>
        <p>Diese Website enthält sogenannte Affiliate-Links. Das bedeutet: Wenn du auf einen solchen Link klickst und anschließend ein Produkt oder eine Dienstleistung kaufst oder buchst, erhalte ich eine Provision vom jeweiligen Anbieter. Für dich entstehen dabei <strong>keine zusätzlichen Kosten</strong> — der Preis ist derselbe wie ohne Affiliate-Link.</p>

        <h2>Welche Partnerprogramme nutze ich?</h2>
        <p><strong>Amazon Partnerprogramm:</strong> Als Amazon-Partner verdiene ich an qualifizierten Käufen. Alle Amazon-Links auf dieser Website sind mit meiner Partner-ID (stromgeist-21) versehen.</p>
        <p><strong>Verivox Partnerprogramm:</strong> Für vermittelte Tarifwechsel über Verivox-Links erhalte ich eine Provision.</p>
        <p><strong>Check24 Partnerprogramm:</strong> Für vermittelte Verträge über Check24-Links erhalte ich eine Provision.</p>

        <h2>Beeinflusst das meine Empfehlungen?</h2>
        <p>Nein. Ich empfehle nur Produkte und Dienste, die ich selbst nutze oder für sinnvoll halte. Die Amazon-Produkte auf dieser Website — EcoFlow STREAM Ultra, STREAM Max, AC Pro und Smart Meter — nutze ich persönlich. Meine inhaltlichen Einschätzungen sind unabhängig von kommerziellen Interessen.</p>
        <p>Affiliate-Links sind auf dieser Website stets durch den Hinweis "Affiliate-Link" oder durch den Kontext erkennbar. Diese Erklärung gilt für die gesamte Website.</p>

        <h2>Kontakt</h2>
        <p>Bei Fragen zu Affiliate-Links oder Kooperationen: <a href="mailto:kontakt@stromgeist.com" style={{color:'var(--green)'}}>kontakt@stromgeist.com</a></p>
      </div>
    </ArticleLayout>
  );
}
