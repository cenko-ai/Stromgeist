export default function MarktWidget() {
  return (
    <section className="markt-section" id="markt">
      <div className="markt-inner">
        <div className="markt-header">
          <span className="markt-title">Wöchentliche Markteinschätzung</span>
          <span className="markt-date">KW 24 · 10. Juni 2026</span>
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
              Strom-Spotpreise und das Frontjahr Cal-27 zeigen weiterhin Aufwärtstendenz. Zwar bremst starker Wind bis kommende Woche und bringt zeitweise über 22 GW Leistung ins Netz, aber ab Sonntag rollt eine Hitzewelle heran — deutlich über dem Klimamittel. Das treibt den Kühlbedarf in die Höhe. Zusätzlich verstärken französische Kernkraftwerk-Ausfälle (EDF hat vier weitere KKW abgefahren) und schwache Solareinspeisung den Druck nach oben. Besonders wichtig: Die Eskalation im Iran und die Hormus-Blockade-Drohungen verteuern Gas und CO2, das wiederum über die Merit Order auch Strompreise hochzieht. Cal-27 durchbricht alte Verlaufshochs charttechnisch bullish — die strukturelle Risikoprämie bleibt bestehen.
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
              Gas wird von zwei Risiken stark getrieben: erstens die Iran-Eskalation mit konkreten Drohungen, die Hormus und zusätzlich die Straße von Bab el-Mandeb (über Huthi-Miliz) zu blockieren — zwei kritische Seewege für Öl und LNG. Zweitens ein drohender Streik in Norwegen, der Exportflüsse stoppen könnte. Positiv wirkt, dass deutsche und europäische Speicher über dem Soll füllen, aber für den kommenden Winter bleibt eine gewisse Nervosität bestehen. El-Niño-Hitze in Asien erhöht dort die LNG-Nachfrage, was den europäischen Markt unter Druck setzt. Trumps wiederholte Aussagen, einen Deal \"in 1-2 Tagen\" hinzubekommen, verlieren an Glaubwürdigkeit — der Markt kalkuliert längerfristig mit hoher Spannung.
            </p>
          </div>

          <div className="markt-card">
            <div className="markt-card-header">
              <div className="markt-card-title">
                <span className="markt-card-icon">⛽</span> Benzin &amp; Diesel
              </div>
              <span className="markt-arrow up">↑</span>
            </div>
            <p className="markt-text">
              Öl und Benzin zeigen bullisches Muster. Brent wurde nach dem Abbruch von Irans Friedensgesprächen und der israelischen Libanon-Offensive Anfang Juni deutlich fester. Die konkreten Drohungen bezüglich Bab el-Mandeb (Huthi-Blockade) und das norwegische Streikrisiko ab dem 5. Juni stützen weitere Aufschläge. Russlands Ölförderung sinkt strukturell, was Angebotsspannung erhöht. US-Benzinpreise sind auf 4-Jahres-Highs, was politischen Druck aufbaut — das könnte längerfristig beruhigend wirken. Kurzfristig jedoch bleibt die Lage angespannt, solange die Geopolitik im Nahen Osten nicht deutlich entspannt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
