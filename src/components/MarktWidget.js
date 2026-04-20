export default function MarktWidget() {
  return (
    <section className="markt-section" id="markt">
      <div className="markt-inner">
        <div className="markt-header">
          <span className="markt-title">Wöchentliche Markteinschätzung</span>
          <span className="markt-date">KW 16 · 15. April 2026</span>
        </div>
        <p className="markt-disclaimer">
          Persönliche Einschätzung des Autors — keine Anlage- oder Energieberatung. Alle Angaben ohne Gewähr.
        </p>
        <div className="markt-grid">
          <div className="markt-card">
            <div className="markt-card-header">
              <div className="markt-card-title">
                <span className="markt-card-icon">⚡</span> Strom
              </div>
              <span className="markt-arrow neutral">→</span>
            </div>
            <p className="markt-text">
              Seitwärts auf hohem Niveau. Das Frontjahr 2027 verharrt bewegungsarm um die 90 €/MWh — aktuell 88,65 €/MWh. Die Märkte warten auf Ergebnisse der neu anberaumten US-Iran-Gespräche. Wind bleibt bis 21. April deutlich unter der Norm, was den Spot stützt. EDF verlängert den Ausfall von Cattenom 4 (1,3 GW) um mehr als einen Monat bis Mitte Juni — ein zusätzlicher Aufwärtsfaktor für den Terminmarkt. Gegenläufig: Italien bringt staatliche Unterstützung für Gaskraftwerke ins Spiel, was mittelfristig die Gasnachfrage erhöhen könnte.
            </p>
          </div>

          <div className="markt-card">
            <div className="markt-card-header">
              <div className="markt-card-title">
                <span className="markt-card-icon">🔥</span> Gas
              </div>
              <span className="markt-arrow up">↑</span>
            </div>
            <p className="markt-text">
              Geopolitik hält die Preise hoch. TTF-Frontjahr 2027 bei 34,74 €/MWh — gestützt durch gescheiterte US-Iran-Gespräche, die US-Blockade der Straße von Hormus und Wartungsarbeiten in Norwegen (Troll, Kollsnes). Qatar Energy nimmt LNG-Verladungen aus Ras Laffan erst nach Ende der Kampfhandlungen wieder auf — drei bis vier Monate bis zur vollen Kapazität, 17 % der Exportkapazität langfristig beschädigt. Dämpfend wirken milde Temperaturen und schwache Nachfrage aus China und Japan. Speicherstände Deutschland: 29,6 %.
            </p>
          </div>

          <div className="markt-card">
            <div className="markt-card-header">
              <div className="markt-card-title">
                <span className="markt-card-icon">⛽</span> Benzin & Diesel
              </div>
              <span className="markt-arrow up">↑</span>
            </div>
            <p className="markt-text">
              Öl unter Aufwärtsdruck. Brent Crude bei 94,79 USD/bbl — getrieben durch härtere iranische Verhandlungsposition und den Einbruch der irakischen Produktion auf rund 0,8 Mio. bpd (Normalwert: 4,3 Mio. bpd). Hohe Gaspreise machen Kohleverstromung in Europa und Asien wirtschaftlicher: Japan, Südkorea und Taiwan erhöhen ihre Kohlekapazitäten. Gegenläufig: Neue USA-Iran-Gespräche lassen Märkte auf Entspannung hoffen; teilweise Passage durch Hormus möglich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
