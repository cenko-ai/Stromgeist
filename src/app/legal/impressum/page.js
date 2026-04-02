import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Impressum | Stromgeist",
};

export default function Impressum() {
  return (
    <ArticleLayout>
      <h1>Impressum</h1>
      <div className="article-byline">Angaben gemäß § 5 TMG</div>
      <div className="article-content">
        <h2>Betreiber</h2>
        <p>Matthias Kirsch<br/>Jakob-Engels-Str. 47<br/>51143 Köln<br/>Deutschland</p>
        
        <h2>Kontakt</h2>
        <p>E-Mail: <a href="mailto:kontakt@stromgeist.com" style={{color:'var(--green)'}}>kontakt@stromgeist.com</a></p>
        
        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>Matthias Kirsch<br/>Jakob-Engels-Str. 47<br/>51143 Köln</p>
        
        <h2>Haftungsausschluss</h2>
        <p><strong>Haftung für Inhalte:</strong> Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
        <p><strong>Haftung für Links:</strong> Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.</p>
        <p><strong>Urheberrecht:</strong> Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
        
        <h2>Streitschlichtung</h2>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{color:'var(--green)'}}>https://ec.europa.eu/consumers/odr</a>. Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </div>
    </ArticleLayout>
  );
}
