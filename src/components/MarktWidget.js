export default function MarktWidget() {
  return (
    <section className="markt-section" id="markt">
      <div className="markt-inner">
        <div className="markt-header">
          <span className="markt-title">Wöchentliche Markteinschätzung</span>
          <span className="markt-date">KW 18 · 28. April 2026</span>
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
              Seitwärtstendenz mit Volatilität durch erneuerbare Spitzen. Die Cal-27-Base-Future konsolidiert seitwärts um 90 €/MWh (aktuell 91,93 €/MWh), während der Spot bei 70,65 €/MWh notiert. Antreiber sind Windverstärkung ab Wochenmitte und Solar auf Doppelleistung (bis 20 GW gegen Saisondurchschnitt ~10 GW), was negative Restlast und möglicherweise negative Preise am 1. Mai erwarten lässt. Gegenläufig wirken die Troll-Wartung in Norwegen (173 GWh/d bis 6. Mai offline) und ein potenzieller EDF-Streik (28.4. bis 21:00 Uhr). Die Marktfundamente bleiben unsicher durch Hormus-Geopolitik und Iran-Verhandlungen.
            </p>
          </div>

          <div className="markt-card">
            <div className="markt-card-header">
              <div className="markt-card-title">
                <span className="markt-card-icon">🔥</span> Gas
              </div>
              <span className="markt-arrow neutral">→</span>
            </div>
            <p className="markt-text">
              Unterstützung durch Geopolitik bei struktureller Nachfrageschwäche. Die TTF notiert stabil bei ~36,75 €/MWh im Frontmonat (+12,5% w-o-w), gestützt durch die Hormus-Blockade (LNG-Exporte bremsen ab Mai), das neue EU-Russland-LNG-Embargo (ab 25.04.), und die Troll-Wartung mit bis zu 70% Feldkapazitätsverlust. Allerdings drückt das warme Wetter (EC46-Forecast) mit Solar-Boom die Heiznachfrage und Gas-for-Power deutlich, während die EU-Speicher bei 31,8% liegen (7,7pp unter Vorjahr). Der irakische Ras-Laffan-Terminal fährt langsam hoch. Strukturelle Knappheit bis 2027 bleibt durch IEA-Prognose (120 bcm Angebotsverlust 2026-30), kompensiert später durch Golden Pass (USA) Maiden-Export.
            </p>
          </div>

          <div className="markt-card">
            <div className="markt-card-header">
              <div className="markt-card-title">
                <span className="markt-card-icon">⛽</span> Benzin & Diesel
              </div>
              <span className=\"markt-arrow up\">↑</span>
            </div>
            <p className=\"markt-text\">
              Ölmarkt unter Hormus-Blockade-Stress. Die Straße von Hormus kontrolliert 20% des globalen Ölhandels (~2 Mio. Fass/Tag), und die US-Blockade iranischer Häfen verstärkt das Angebot-Ungleichgewicht. Die OPEC+ kann Ausfälle nur begrenzt kompensieren — etwa 20% der globalen Kapazität sind betroffen. Preistreiber: geopolitische Unsicherheit US-Iran-Konflikt (verlängert das Gaspreisniveau strukturell), während Asia-Pacific mit Hitzewellen droht und zusätzliche LNG-Nachfrage erwartet. Erste US-LNG-Projekte (Golden Pass) stehen vor Maiden-Export. Insgesamt: mittelfristige Knappheit bleibt Support für höhere Öl- und Benzinpreise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
