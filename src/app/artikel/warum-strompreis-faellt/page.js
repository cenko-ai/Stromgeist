import ArticleLayout from '@/components/ArticleLayout';

export const metadata = {
  title: 'Warum der Strompreis fällt – aber deine Rechnung nicht | Stromgeist',
  description: 'An den Energiebörsen sind die Preise deutlich gesunken. Trotzdem zahlen die meisten Haushalte noch immer wie in der Hochphase. Was steckt dahinter?',
};

export default function Article() {
  return (
    <ArticleLayout
      title="Warum der Strompreis fällt – aber deine Rechnung nicht"
      byline="Von Stromgeist · März 2026 · 7 Minuten Lesezeit"
    >
      <p>Du hast es sicher gelesen: Die Strompreise an den Energiebörsen sind in den letzten Monaten deutlich gefallen. Experten jubeln, Medien berichten von Entspannung auf den Energiemärkten. Und trotzdem: Deine Abrechnung vom Grundversorger sieht noch genauso aus wie vor einem Jahr.</p>
      <p>Wie passt das zusammen? Die Antwort ist keine Verschwörung – aber sie zeigt, wie das System wirklich funktioniert. Und wenn du es verstehst, kannst du konkret davon profitieren.</p>

      <h2>Der Börsenstrompreis – was er ist und was er nicht ist</h2>
      <p>Wenn in den Nachrichten von „sinkenden Strompreisen" die Rede ist, meinen Journalisten fast immer den <strong>Day-Ahead-Preis</strong> an der Strombörse EPEX SPOT in Leipzig. Das ist der Preis, zu dem Energieversorger und große Industrieunternehmen Strom für den nächsten Tag kaufen und verkaufen – stündlich, in großen Mengen.</p>
      <p>Dieser Preis ist tatsächlich gesunken. Im Winter 2021/22 und nach dem russischen Angriff auf die Ukraine 2022 explodierte er auf über 400 Euro pro Megawattstunde. Heute liegt er wieder bei 60–100 Euro – je nach Saison, Wind und Sonnenstunden.</p>
      <p><strong>Das Problem:</strong> Dieser Börsenpreis hat mit deiner Haushaltsstromrechnung nur sehr indirekt zu tun.</p>

      <h2>Warum dein Tarif trotzdem teuer bleibt</h2>
      <p>Dein Haushaltsstrompreis setzt sich aus mehreren Schichten zusammen. Der reine Energieeinkauf – also das, was an der Börse gehandelt wird – macht davon nur etwa <strong>20–25 Prozent</strong> aus.</p>

      <table>
        <thead><tr><th>Bestandteil</th><th>Anteil am Strompreis</th></tr></thead>
        <tbody>
          <tr><td>Netzentgelte (Transport, Leitungen)</td><td>~25 %</td></tr>
          <tr><td>Steuern &amp; Abgaben</td><td>~25 %</td></tr>
          <tr><td>Energieeinkauf (Börse + Hedging)</td><td>~20–25 %</td></tr>
          <tr><td>Vertrieb &amp; Marge des Versorgers</td><td>~15–20 %</td></tr>
        </tbody>
      </table>

      <p>Das bedeutet: Selbst wenn der Börsenpreis auf null fiele, würde deine Rechnung nur um ein Viertel sinken. Die anderen Kostenblöcke bleiben – und einige davon steigen sogar. Netzentgelte etwa sind 2024 und 2025 in vielen Regionen Deutschlands deutlich gestiegen, weil der Netzausbau für die Energiewende teuer ist.</p>

      <h2>Das Hedge-Problem: Versorger kaufen auf Vorrat</h2>
      <p>Hier wird es interessant – und das ist der Punkt, den kaum jemand erklärt.</p>
      <p>Große Energieversorger kaufen ihren Strom <strong>nicht täglich an der Börse</strong>. Das wäre zu riskant. Stattdessen kaufen sie auf Termin: Wochen, Monate, manchmal bis zu drei Jahre im Voraus. Das nennt sich <strong>Hedging</strong>.</p>
      <p>Das hat einen guten Grund: Wenn du 2 Millionen Kunden mit Strom versorgst, kannst du nicht darauf hoffen, dass die Börse gerade günstig ist. Du sicherst dir die Preise im Voraus ab.</p>
      <p>Das bedeutet aber auch: <strong>Wenn die Börsenpreise heute fallen, profitiert dein Versorger erst dann davon, wenn die alten, teuren Verträge auslaufen</strong> – und neue, günstigere eingebucht werden. Das dauert Monate bis Jahre.</p>
      <p>In der Praxis: Ein Versorger, der 2022 auf dem Hochpunkt eingekauft hat, verkauft dir heute noch immer teuren Strom – weil er selbst noch teuren Strom in den Büchern hat.</p>

      <h2>Was du jetzt konkret tun kannst</h2>
      <p>Neue Verträge bei Wettbewerbsanbietern spiegeln die aktuellen Marktpreise schneller wider als Bestandstarife beim Grundversorger. Ein Haushalt mit 3.500 kWh Jahresverbrauch kann aktuell <strong>zwischen 150 und 350 Euro pro Jahr</strong> sparen, indem er vom teuren Grundversorger zu einem günstigen Wettbewerber wechselt.</p>
      <p>Worauf du beim Wechsel achten solltest:</p>
      <ul>
        <li>Mindestens 12 Monate Preisgarantie verlangen</li>
        <li>Vorsicht bei Tarifen ohne Preisgarantie – oft Lockangebote, die nach 3 Monaten teurer werden</li>
        <li>Anbieterbonität prüfen: Etablierte Anbieter sind sicherer als unbekannte Newcomer</li>
      </ul>
      <p>Wenn du gerade in der Grundversorgung bist: Wechsle. Jetzt. Die Grundversorgung ist als Notfalllösung gedacht, nicht als Dauertarif – und entsprechend ist sie bepreist.</p>
      <p>Für Haushalte mit steuerbaren Lasten – Wallbox, Wärmepumpe, Heimspeicher – lohnt sich zusätzlich ein Blick auf <strong>dynamische Tarife</strong>. Seit 2024 sind Anbieter in Deutschland verpflichtet, diese auf Anfrage anzubieten. In Stunden mit viel Wind und Sonne ist Strom manchmal fast umsonst. Anbieter wie Tibber oder Ostrom machen das zugänglich.</p>

      <hr />

      <div className="disclaimer-box">
        <strong>Hinweis:</strong> Die Inhalte dieses Artikels dienen der allgemeinen Information und stellen keine professionelle Energieberatung dar. Preisangaben und Marktdaten: Stand März 2026, ohne Gewähr. Bitte prüfe aktuelle Angebote selbst bevor du Entscheidungen triffst.
      </div>

      <div className="article-links">
        <h4>Tarifvergleich starten</h4>
        <a href="https://partner.verivox.de/go.cgi?pid=6744&wmid=37&cpid=1&prid=93&subid=&target=stromvergleich_2019-09" target="_blank" rel="noopener">Verivox Strom ↗</a>
        <a href="https://partner.verivox.de/go.cgi?pid=6744&wmid=40&cpid=1&prid=93&subid=&target=Oekostromvergleich_2019-09" target="_blank" rel="noopener">Verivox Ökostrom ↗</a>
        <a href="https://www.c24n.de/2rYlvHM" target="_blank" rel="noopener">Check24 Strom ↗</a>
        <a href="https://www.c24n.de/Vkxlwjs" target="_blank" rel="noopener">Check24 Ökostrom ↗</a>
        <a href="https://tibber.com/de" target="_blank" rel="noopener">Tibber (dynamisch) ↗</a>
      </div>

      <div className="author-box">
        <div className="author-avatar">S</div>
        <div>
          <h4>Über den Autor</h4>
          <p>Ich arbeite als Portfoliomanager Strom &amp; Gas bei einem deutschen Energieversorger und beobachte die Energiemärkte täglich aus nächster Nähe. Stromgeist ist mein Versuch, dieses Wissen für alle zugänglich zu machen – ohne versteckte Interessen.</p>
        </div>
      </div>
    </ArticleLayout>
  );
}
