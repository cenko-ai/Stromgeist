export default function MarktWidget() {
  return (
    <section className="markt-section" id="markt">
      <div className="markt-inner">
        <div className="markt-header">
          <span className="markt-title">Wöchentliche Markteinschätzung</span>
          <span className="markt-date">KW 17 · 21. April 2026</span>
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
              Konsolidierungsphase mit leichtem Aufwärtsbias. Die Cal-27-Base-Future bewegt sich seitwärts um 90 €/MWh (aktuell 88,84 €/MWh) ohne klaren Trendimpuls. Die Märkte sind fokussiert auf die US-Iran-Verhandlungen mit Stichtag 22. April. Im Spot drückt die steigende Wind- und Solarproduktion ab Wochenmitte die Preise unter Druck, kompensiert aber teilweise durch die Troll-Wartung in Norwegen, die das Gasangebot senkt. Die EU-Kommission diskutiert sechs Reformoptionen für den Emissionshandel, was mittelfristig marktgestaltend sein könnte. Für die nächsten zwei Wochen entscheidend: der Ausgang der iranischen Verhandlungen.
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
              Geopolitisches Feuer am höchsten. Die TTF-Frontjahr-2027 notiert bei stabilen ~40 €/MWh, getrieben durch mehrere Faktoren: die iranischen Blockademitnahmen an der Straße von Hormus, die US-Waffenruhe-Frist die Mittwoch 22. April endet, Wartungsarbeiten in Norwegen (Troll mit bis zu 70% Feldkapazität offline) und vier LNG-Tanker, die südwestlich der Hormusstraße warten. Gegenläufig: Erneuerbare Energien reduzieren die Gasnachfrage um über 400 GWh täglich, und Temperaturen liegen europaweit über dem saisonalen Schnitt — typischerweise bis Anfang Juni. Die nächste Überraschung kommt wahrscheinlich von den Verhandlungsergebnissen.
            </p>
          </div>

          <div className="markt-card">
            <div className="markt-card-header">
              <div className="markt-card-title">
                <span className="markt-card-icon">⛽</span> Benzin & Diesel
              </div>
              <span className="markt-arrow neutral">→</span>
            </div>
            <p className="markt-text">
              Öl unter geopolitischem Druck. Die OPEC+ hat ihre Gewalt unter Kontrolle, aber die Lage bleibt fragil: Irak arbeitet aktuell nur mit ~0,8 Millionen Fass pro Tag statt der normalen 4,3 Millionen — ein dramatischer Ausfall. Kompensiert wird das teilweise durch stabiles TTF-Gas um die 40 €/MWh, das Kohleverstromung in Japan, Südkorea und Taiwan attraktiver macht — dort gehen mehr Kapazitäten online. Die Raffinerien in Hormus und der Arabischen See sehen derzeit hohe Kapazitätsausfälle. Bodenständig bleibt: Neue US-Iran-Gespräche könnten Entspannung bringen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
