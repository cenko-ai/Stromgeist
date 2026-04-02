import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Lohnt sich PV 2026 noch? | Stromgeist",
  description: "Erfahre, warum Photovoltaik in 2026 extrem lukrativ ist, bevor Module wieder teurer werden.",
};

export default function ArticlePV2026() {
  return (
    <ArticleLayout>
      <h1>Lohnt sich PV 2026 noch? Jetzt kaufen — bevor es teurer wird</h1>
      <div className="article-byline">Von Stromgeist · März 2026 · 7 Minuten Lesezeit</div>

      <div className="affiliate-box">
        <strong>Hinweis zu Affiliate-Links:</strong> Dieser Artikel enthält Affiliate-Links. Wenn du über diese Links kaufst oder einen Vertrag abschließt, erhalte ich eine kleine Provision.
      </div>

      <div className="article-content">
        <p>Die kurze Antwort: Ja — aber die Uhr tickt. Wer mit Photovoltaik liebäugelt, sollte 2026 handeln.</p>

        <h2>Was sich gerade verändert — und warum es eilt</h2>
        <p>Zwei Faktoren machen 2026 zum entscheidenden Jahr für PV-Käufer. Erstens diskutiert die Bundesregierung ernsthaft die Abschaffung oder Kürzung der Einspeisevergütung. Zweitens sind Solarmodule so günstig wie lange nicht mehr.</p>

        <h2>Die Wirtschaftlichkeit heute — konkrete Zahlen</h2>
        <table>
          <tbody>
            <tr><th>Anlagengröße</th><th>Investition</th><th>Jahresertrag</th><th>Amortisation</th></tr>
            <tr><td>5 kWp (Garage/Klein)</td><td>4.000–6.000 €</td><td>~4.500 kWh</td><td>8–10 Jahre</td></tr>
            <tr><td>10 kWp (Einfamilienhaus)</td><td>8.000–12.000 €</td><td>~9.000 kWh</td><td>9–12 Jahre</td></tr>
          </tbody>
        </table>

        <h2>Für wen lohnt es sich besonders</h2>
        <p>Besonders Besitzer von E-Autos (Wallbox) oder Wärmepumpen profitieren massiv, da der Eigenverbrauch rasant ansteigt.</p>

        <hr />
        
        <div className="article-links">
          <h4>Jetzt Angebote einholen</h4>
          <a href="#" target="_blank" rel="noopener noreferrer">Solateure vergleichen</a>
        </div>
      </div>
    </ArticleLayout>
  );
}
