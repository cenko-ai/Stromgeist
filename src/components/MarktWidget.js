export default function MarktWidget() {
  return (
    <section className="markt-section" id="markt">
      <div className="markt-inner">
        <div className="markt-header">
          <span className="markt-title">Wöchentliche Markteinschätzung</span>
          <span className="markt-date">KW 20 · 13. Mai 2026</span>
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
              Cal-27 zieht über 92 €/MWh und zeichnet ein bullisches Dreieck mit Kursziel ~93,75 €/MWh. Modellläufe deuten für 15.–23. Mai nur 5–8 GW Windeinspeisung an (Klimamittel 11,5 GW), was Preisspitzen wahrscheinlich macht. PV-Aufbringung bleibt schwach um 10 GW. Die Iran-Eskalation verteuert Gas und CO2 dauerhaft — die Merit Order zieht mit und stützt Strompreise strukturell. Hormus-Risikoprämie bleibt im Cal-27 bestehen. Positiv: CO2-Reform weniger scharf als erhofft, Fallback-Werte unverändert. Neutral: EU beschleunigt EE-Ausbau mittelfristig, dämpfend auf Frontjahre.
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
              TTF notiert bei 47,83 €/MWh und wird durch Mehrfach-Chocks gestützt: Hammerfest-LNG (6,5 Mt/a) ist bis 13. Mai offline, Einspeicherrate Deutschland eingebrochen, Rehden wird nicht befüllt. INES warnt, das 76%-Speicherziel ist nur theoretisch — bei kaltem Winter droht 20 TWh Unterdeckung. Iran-Forderungen sind unrealistisch; Trump sieht nur ~1% Wahrscheinlichkeit ohne Eskalation. LNG-Ströme verlagern sich nach Asien (US-Exporte: Feb 0,6 → Mai 3,5 Mt). Winterrisiko 2026/27 steigt strukturell. Positiv: Australien führt 20%-Inlandsquote für LNG ab Juli 2027 ein (bullish). EU-Russland-LNG-Ban aktiv seit 25.04., vollständiges Embargo Jan 2027.
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
              Brent klettert über 107 USD/bbl. Trump nennt iranische Antwort „völlig inakzeptabel" — Eskalation ist wahrscheinlich. Aramco meldet ~100 Mio. Barrel/Woche Ausfall (2-Monats-Defizit: ~1 Mrd. Barrel). Kpler-Szenario „Iranian Control": Hormus-Durchfahrten dauerhaft auf 40–50% gedeckelt. Goldman Sachs warnt: globale Öllager auf 8-Jahres-Tief. Geopolitische Unsicherheit (Hormus, Iran, Druzhba-Unterbrechung) treibt Risikoprämie. Negativ: OPEC+ und ADNOC wollen Kapazitäten ausweiten; Indien spart Kraftstoffe (Modi-Reise-Verzicht). Structural: Angebotsdefizit und Geopolitik stützen Ölpreise nachhaltig bis Kriegsende.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
