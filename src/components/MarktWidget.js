export default function MarktWidget() {
  return (
    <section className="markt-section" id="markt">
      <div className="markt-inner">
        <div className="markt-header">
          <span className="markt-title">Wöchentliche Markteinschätzung</span>
          <span className="markt-date">KW 19 · 6. Mai 2026</span>
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
              Cal-27 konsolidiert seitwärts um 92,76 €/MWh, Spot/M+1 notiert bei 87,05 €/MWh. EDF-Tarifkonflikte in Frankreich halten an — Kernenergieausfälle bleiben strukturelles Risiko und verzögern die Rückkehr französischer AKWs. Windaufkommen bleibt moderat, Wetteraussichten sind mild, was die Heiznachfrage schwach hält. Extreme Negativpreise am 1. Mai (-500 €/MWh) unterstreichen die volatile Situation durch Erneuerbare-Spitzen. Hormus-Geopolitik und Iran-Eskalation halten eine strukturelle Risikoprämie im Frontjahr bestehen — trotz Unsicherheit fehlt aber derzeit ein klarer Trendimpuls.
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
              TTF notiert bei 47,7 €/MWh (Spot/M+1), gestützt durch Hormus-Blockade, EU-Russland-LNG-Embargo (ab 25.04. aktiv) und Troll-Wartung mit bis zu 70% Feldkapazitätsverlust (&gt;100 GWh/d bis 6.5.). Asien-Hitzewellen im Mai/Juni erhöhen LNG-Nachfrage Südost-/Südasien, was mit Europas Bedarf konkurriert. Positive: Troll-Wartung abgeschlossen ab 6. Mai, norwegisches Angebot erholt sich. EU-Gasspeicher steigen ab Mai, Rehden speichert aktiv ein. Strukturelle Knappheit bis 2027 bleibt durch IEA-Prognose (120 bcm Angebotsverlust 2026-30). Golden Pass (USA) bringt Maiden-Export 2026, mittelfristige Entlastung.
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
              Ölmarkt bleibt strukturell unterstützt: Hormus-Blockade kontrolliert 20% des globalen Handels, Goldman Sachs meldet Lagerbestände auf 8-Jahres-Tief, Kirishi-Raffinerie in Russland durch Drohnenangriff gestoppt. Chevron CEO erwartet Angebotsverknappung ab H2 2026, Morgan Stanley warnt vor historisch niedrigen US-Benzinlagern. Geopolitische Unsicherheit (Iran-Eskalation, Druzhba-Unterbrechung) treibt Risikoprämie. Negativ: OPEC-Austritt der UAE (31.05.) könnte Dumping-Druck bringen. Insgesamt: strukturelle Angebotsengpässe und geopolitische Spannungen stützen Ölpreise nachhaltig.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
