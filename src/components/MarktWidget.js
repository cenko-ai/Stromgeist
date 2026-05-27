export default function MarktWidget() {
  return (
    <section className="markt-section" id="markt">
      <div className="markt-inner">
        <div className="markt-header">
          <span className="markt-title">Wöchentliche Markteinschätzung</span>
          <span className="markt-date">KW 22 · 27. Mai 2026</span>
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
              Cal-27 verharrt in der bewährten Range zwischen 90,33 und 91,16 €/MWh. Die US-/Israel-Anschläge auf iranische Raketenrampen trieben die Preise erneut zur Oberseite — die Hormus-Risikoprämie bleibt strukturell. MetDesk warnt: Juni wird heiß und trocken in Frankreich/Deutschland, Atomkraftwerke und Wasserkraft geraten unter Druck. Wind fällt ab Ende der Woche schwach aus; Solarertrag bis Monatsende hoch, was Mittagsdellen und Stundenausfälle mit sich bringt. Positiv: Deutschland ist wieder Netto-Stromexporteur (Q1-Bilanz), CO2-Reform schwächer als erwartet — Fallback-Werte unverändert. Strukturell: Die Iran-Eskalation verteuert Gas und CO2; die Merit Order zieht Strompreise mit nach oben.
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
              TTF notiert bei 46,75 €/MWh und gerät zum vierten Mal in vier Wochen unter Beschuss. Die nächtlichen US-/Israel-Anschläge auf iranische Raketenrampen und Minenleger in Hormus lösten einen Preissprung aus — die Achterbahn bleibt. Ein MoU USA/Iran ist „weitgehend ausgehandelt" (60 Tage Waffenruhe, Hormus-Öffnung), die Revolutionsgarde fordert aber nur schrittweise Öffnung; belastbare Einigung ist nicht in Sicht. Der El-Niño-Effekt schlägt durch: Japan überschritt am 18.05. erstmals 35°C ungewöhnlich früh, Asiensommer wird heiß und trocken — LNG-Konkurrenz steigt strukturell. Positiv: DE-Einspeicherraten über 1 TWh/Tag, Rehden wird wieder befüllt, Einzelne LNG-Tanker durchqueren Hormus über Pfingsten. Strukturell: Hormus-Risikoprämie bleibt bis zur Einigung; El-Niño hebt Asien-Gasnachfrage dauerhaft.
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
              Brent notiert bei 96,14 USD/bbl. Die neuen US-/Israel-Anschläge auf iranische Raketenrampen und Minenleger in Hormus zünden einen Preissprung — die nächste Antwort des Iran ist wahrscheinlich. Russlands Produktion sinkt; US-SPR-Withdrawals auf Rekord (Aramco-Lücke: ~100 Mio. Barrel/Woche). Die Revolutionsgarde hält Hormus nur schrittweise offen, Kpler-Modelle rechnen mit 40–50% Durchfahrtsreduktion dauerhaft. Die Charttechnik ist bearish unter 100 USD/bbl (Doppeltop-Risiko bei &lt;96 USD), aber Geopolitik überwiegt. Negativ: China-Nachfrage schwach, Indien dämpft Verbrauch; US-Benzinpreise auf 4-Jahres-Hoch bedeuten politischen Druck auf Trump. Strukturell: Angebotsdefizit und Iran-Risikoprämie stützen Ölpreise bis zur Marktberuhigung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
