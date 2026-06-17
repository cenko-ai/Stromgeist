export default function MarktWidget() {
  return (
    <section className="markt-section" id="markt">
      <div className="markt-inner">
        <div className="markt-header">
          <span className="markt-title">Wöchentliche Markteinschätzung</span>
          <span className="markt-date">KW 25 · 17. Juni 2026</span>
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
              Strom bewegt sich in Seitwärtsmuster mit erhöhter Volatilität. Eine Hitzewelle baut sich ab Donnerstag auf — Tagestemperaturen über 30°C — und wird den Kühlbedarf deutlich anheizen. Gleichzeitig sinkende Windproduktion (6 GW, Sonntag mit Tief unter 3 GW) und französische Kernkraftwerk-Drosselungen wegen Kühlwassergrenzen an der Rhône unterstützen Aufwärtstendenzen. Dem entgegen steht ein kräftiger Photovoltaik-Anstieg ab Donnerstag (19 GW Spitzenlast) mit ausgeprägten Mittagsdellen. Das Iran-Rahmenabkommen vom 19. Juni senkt Gas- und CO2-Preise, was über die Merit Order Strom entlastet. Charttechnisch bleibt Cal-27 unter Druck, die 87-EUR/MWh-Marke und die 200-Tage-Linie sind in Sichtweite.\n            </p>
          </div>

          <div className="markt-card">
            <div className="markt-card-header">
              <div className="markt-card-title">
                <span className="markt-card-icon">🔥</span> Gas
              </div>
              <span className="markt-arrow neutral">→</span>
            </div>
            <p className="markt-text">
              Gas zeigt Erleichterung nach dem USA-Iran-Rahmenabkommen (digital unterzeichnet, offizielle Unterzeichnung 19. Juni in der Schweiz). Die Hormus-Wiederöffnung ist schrittweise — Minenräumung und Reederversicherung brauchen Wochen — und die Risikoprämie bleibt teilweise erhalten. TTF Cal-27 fiel von über 37 EUR/MWh auf 35 EUR/MWh, ein deutliches Korrekturzeichen. Gegenwind kommt aus Australien: Der Ichthys-LNG-Streik verlängert sich bis mindestens 6. Juli (10% der australischen LNG-Kapazität offline). Katar plant schnelle Rückkehr (80% Kapazität in 2 Monaten), und El-Niño hebt strukturell die LNG-Nachfrage in Asien. Restunsicherheit bleibt durch die Israel-Libanon-Situation mit offener Atombombe-Frage in 60-tägiger Verhandlungsperiode.\n            </p>
          </div>

          <div className="markt-card">
            <div className="markt-card-header">
              <div className="markt-card-title">
                <span className="markt-card-icon">⛽</span> Benzin &amp; Diesel
              </div>
              <span className="markt-arrow down">↓</span>
            </div>
            <p className="markt-text">
              Rohöl unter Druck — Brent korrigiert deutlich von ~95 USD auf 79 USD, charttechnisch ist die 200-Tage-Linie durchbrochen (Bärensignal). Das Iran-Abkommen bricht die Hormus-Risikoprämie weg, und OPEC+ erhöht das Förderziel weiter. Goldman Sachs senkt die Q4-Prognose auf 80 USD, Morgan Stanley rechnet Q3 mit 90 und Q4 mit 80 USD. Die Rückkehr iranischen Öls auf den Markt (parallel zur LNG-Wiederöffnung, erste Schiffe durchqueren Hormus mit Transponder an) beschwichtigt die Angebotsseite. Zwar bleiben Restkonflikte um Libanon und die Atomfrage — Trump droht mit Militärschlägen — aber der unmittelbare Preisdruck ist nach dem Deal-Durchbruch deutlich gewichen.\n            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
