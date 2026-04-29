export default function MarktWidget() {
  return (
    <section className="markt-section" id="markt">
      <div className="markt-inner">
        <div className="markt-header">
          <span className="markt-title">Wöchentliche Markteinschätzung</span>
          <span className="markt-date">KW 18 · 29. April 2026</span>
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
              Volatilität durch Erneuerbare und norwegische Wartungsausfälle prägen die Woche. Die Cal-27-Base-Future konsolidiert seitwärts um 91,16 €/MWh, der Spotmarkt notiert bei 70,65 €/MWh. Treiber: Windverstärkung ab Wochenmitte und Solarproduktion auf doppelter Leistung (bis 20 GW vs. Saisondurchschnitt ~10 GW) führen zu negativer Restlast — negative Preise am 1. Mai wahrscheinlich. Die Troll-Wartung in Norwegen reduziert Gasangebot um 173 GWh/d bis 6. Mai und treibt Gasverstromungskosten in die Höhe. EDF-Streik und Tarifverhandlungen erhöhen Unsicherheit. Hormus-Geopolitik bleibt mittelfristig preisunterstützend.
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
              Geopolitische Unsicherheit stützt, warmes Wetter und Solar-Boom drücken Fundamentale. Die TTF notiert bei 43,51 €/MWh (Spot/M+1), gestützt durch die Hormus-Blockade (LNG-Exporte bremsen ab Mai), das EU-Russland-LNG-Embargo (ab 25.04.), und die Troll-Wartung mit bis zu 70% Feldkapazitätsverlust (>100 GWh/d bis 6. Mai). Allerdings drückt das warme EC46-Forecast mit Solar-Boom die Heiznachfrage und Gas-for-Power deutlich. EU-Speicher liegen bei 31,8% (7,7pp unter Vorjahr). Ras-Laffan-Terminal fährt langsam hoch. Strukturelle Knappheit bis 2027 bleibt durch IEA-Prognose (120 bcm Angebotsverlust 2026-30). Golden Pass (USA) bringt Maiden-Export 2026.
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
              Ölmarkt unter Druck durch Hormus-Blockade und geopolitisches Risiko. Die Straße von Hormus kontrolliert 20% des globalen Ölhandels (~2 Mio. Fass/Tag), die US-Blockade iranischer Häfen verstärkt das Angebot-Ungleichgewicht. Brent-Spot notiert mit ~25 USD/bbl Aufschlag auf Futures — physische Markt-Knappheit. OPEC+-Ausfälle sind schwer kompensierbar. UAE tritt OPEC aus (31.05.): ~15% Kapazitätsverlust, aggressives Dumping-Potenzial danach (Break-even $30-35/bbl). Trump-Druck auf Saudi Arabia wächst. Insgesamt: mittelfristige Knappheit und geopolitische Spannungen stützen Ölpreise nachhaltig.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
