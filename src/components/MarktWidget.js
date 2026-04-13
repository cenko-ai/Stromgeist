export default function MarktWidget() {
  return (
    <section className="markt-section" id="markt">
      <div className="markt-inner">
        <div className="markt-header">
          <span className="markt-title">Wöchentliche Markteinschätzung</span>
          <span className="markt-date">KW 16 · 13. April 2026</span>
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
              <span className="markt-arrow up">↑</span>
            </div>
            <p className="markt-text">
              Klarer Richtungswechsel nach oben. Die gescheiterten Islamabad-Verhandlungen und die angekündigte US-Seeblockade iranischer Häfen treiben das Frontjahr 2027 am Montagmorgen um über 2 % auf 91,25 €/MWh. Gleichzeitig dämpft ein überdurchschnittlich warmer April (10–14 °C) die Spot-Preise — am Samstag lag der Baseload bei nur 46,57 €/MWh dank starker PV-Einspeisung. Kurzfristig zwei gegenläufige Kräfte: Erneuerbare drücken den Spot, Geopolitik zieht den Terminmarkt hoch.
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
              Starke Aufwärtsbewegung. Das TTF-Frontjahr springt am Montag um über 5 % auf 37,30 €/MWh — die US-Seeblockade iranischer Häfen hält 14 beladene LNG-Tanker im Persischen Golf fest. Etwas Entlastung kommt vom australischen Woodside-Terminal, das nach Zyklon Narelle wieder vollständig in Betrieb ist, und von Ras Laffan (Katar), das schrittweise hochfährt. Strukturell erwartet der Markt ein neues Preisniveau von 30–40 €/MWh beim TTF-Frontjahr.
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
              Öl reagiert scharf auf die Eskalation. Brent Crude bewegte sich zuletzt in Richtung neuer Hochs bei ~119 USD/bbl — die US-Seeblockade iranischer Häfen liefert den nächsten Schub Richtung 129 USD/bbl (erstes Fibonacci-Ziel). Reedereien wie Maersk und Hapag-Lloyd meiden die Straße von Hormus weiterhin. Entspannung erst, wenn die Verhandlungen echte Fortschritte zeigen — davon ist nach dem Islamabad-Abbruch vorerst nichts zu sehen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
