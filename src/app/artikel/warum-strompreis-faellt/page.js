import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Warum der Strompreis fällt – aber deine Rechnung nicht | Stromgeist",
  description: "Erfahre, warum Börsenpreise sinken, aber dein Haushaltsstromtarif oft teuer bleibt – und was du tun kannst.",
};

export default function Article1() {
  return (
    <ArticleLayout>
      <h1>Warum der Strompreis fällt – aber deine Rechnung nicht</h1>
      <div className="article-byline">Von Stromgeist · März 2026 · 7 Minuten Lesezeit</div>

      <div className="article-content">
        <p>Du hast es sicher gelesen: Die Strompreise an den Energiebörsen sind in den letzten Monaten deutlich gefallen. Experten jubeln, Medien berichten von Entspannung auf den Energiemärkten. Und trotzdem: Deine Abrechnung vom Grundversorger sieht noch genauso aus wie vor einem Jahr.</p>
        <p>Wie passt das zusammen? Die Antwort ist keine Verschwörung – aber sie zeigt, wie das System wirklich funktioniert. Und wenn du es verstehst, kannst du konkret davon profitieren.</p>

        <h2>Der Börsenstrompreis – was er ist und was er nicht ist</h2>
        <p>Wenn in den Nachrichten von „sinkenden Strompreisen" die Rede ist, meinen Journalisten fast immer den <strong>Day-Ahead-Preis</strong> an der Strombörse EPEX SPOT in Leipzig. Das ist der Preis, zu dem Energieversorger und große Industrieunternehmen Strom für den nächsten Tag kaufen und verkaufen – stündlich, in großen Mengen.</p>
        <p>Dieser Preis ist tatsächlich gesunken. Im Winter 2021/22 und nach dem russischen Angriff auf die Ukraine 2022 explodierte er auf über 400 Euro pro Megawattstunde. Heute liegt er wieder bei 60–100 Euro – je nach Saison, Wind und Sonnenstunden.</p>
        <p><strong>Das Problem:</strong> Dieser Börsenpreis hat mit deiner Haushaltsstromrechnung nur sehr indirekt zu tun.</p>

        <h2>Warum dein Tarif trotzdem teuer bleibt</h2>
        <p>Dein Haushaltsstrompreis setzt sich aus mehreren Schichten zusammen. Der reine Energieeinkauf – also das, was an der Börse gehandelt wird – macht davon nur etwa <strong>20–25 Prozent</strong> aus.</p>

        <table>
          <tbody>
            <tr><th>Bestandteil</th><th>Anteil am Strompreis</th></tr>
            <tr><td>Netzentgelte (Transport, Leitungen)</td><td>~25 %</td></tr>
            <tr><td>Steuern & Abgaben</td><td>~25 %</td></tr>
            <tr><td>Energieeinkauf (Börse + Hedging)</td><td>~20–25 %</td></tr>
            <tr><td>Vertrieb & Marge des Versorgers</td><td>~15–20 %</td></tr>
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

        <hr />

        <div className="article-links">
          <h4>Tarifvergleich starten</h4>
          <a href="#" target="_blank" rel="noopener noreferrer">Verivox Strom</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Check24 Strom</a>
        </div>

        <div className="author-box">
          <div className="author-avatar">S</div>
          <div>
            <h4>Über den Autor</h4>
            <p>Ich arbeite als Portfoliomanager Strom & Gas und beobachte Energiemärkte täglich. Dieser Beitrag repräsentiert meine persönliche Sichtweise.</p>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}
