export default function MarktWidget() {
  return (
    <section className="markt-section" id="markt">
      <div className="markt-inner">
        <div className="markt-header">
          <span className="markt-title">Wöchentliche Markteinschätzung</span>
          <span className="markt-date">KW 14 · 31. März 2026</span>
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
              <span className="markt-arrow side">→</span>
            </div>
            <p className="markt-text">
              Der Strommarkt bleibt uneinheitlich. Wind schwankt stark — heute 18,5 GW, morgen nur 2 GW erwartet. Ein ungeplanter Ausfall des französischen Reaktors Tricastin 4 (915 MW) bis Anfang April stützt die Preise kurzfristig. Das Frontjahr 2027 prallt weiterhin an der 100 €/MWh-Marke ab — vorerst Seitwärtsbewegung.
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
              Gas unter starkem Aufwärtsdruck. Die Straße von Hormuz ist de facto blockiert — rund 20 % des weltweiten LNG-Angebots fallen aus. Zusätzlich beschädigte Zyklon Narelle die australische Wheatstone-Anlage (Chevron) für mehrere Wochen. Ras Laffan in Katar nimmt frühestens nach Ende der Kampfhandlungen wieder Betrieb auf. Die Speicherstände in Deutschland bleiben kritisch niedrig. Trumps Rede hat die Märkte nicht beruhigt, sondern durch seine Drohungen weiter in Aufruhr versetzt.
            </p>
          </div>

          <div className="markt-card">
            <div className="markt-card-header">
              <div className="markt-card-title">
                <span className="markt-card-icon">⛽</span> Benzin & Diesel
              </div>
              <span className="markt-arrow up-slight">↗</span>
            </div>
            <p className="markt-text">
              Öl bleibt erhöht. Iran attackiert weiter — zuletzt traf eine Drohne einen kuwaitischen Öltanker. Saudi-Arabien erhöht Exporte über den Hafen Yanbu als Umgehungsroute. Gegenläufig: Trump erwägt laut WSJ ein Kriegsende auch ohne vollständige Öffnung der Straße von Hormuz. Entspannungshoffnung dämpft, aber die Lage bleibt angespannt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
