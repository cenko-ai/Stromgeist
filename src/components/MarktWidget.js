export default function MarktWidget() {
  return (
    <section className="markt-section" id="markt">
      <div className="markt-inner">
        <div className="markt-header">
          <span className="markt-title">Wöchentliche Markteinschätzung</span>
          <span className="markt-date">KW 23 · 3. Juni 2026</span>
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
              Die Ausblicke für Spot und Cal-27 sind kurzfristig bullish. Unten drückt starker Wind bis Donnerstag (bis 21 GW), doch ab Sonntag wird es deutlich wärmer als im Klimamittel — der Kühlbedarf zieht an. Oben stützen Ausfälle bei französischen Kernkraftwerken (EDF: Tricastin 3 und Dampierre 2, insgesamt 1,8 GW) und eine schwache Solareinspeisung bis zur Monatsmitte. Die Iran-Eskalation und die israelische Libanon-Offensive verteuern Gas und CO2, was über die Merit Order auch die Strompreise zieht. Cal-27 bricht aus seiner Range nach oben aus; die Hormus-Risikoprämie bleibt strukturell bestehen, und die ETS-Reform vom 15. Juli wird länger Druck ausüben.
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
              Spot und Cal-27 sind beide bullish. Der Iran hat Friedensgespräche ausgesetzt und droht nach der israelischen Libanon-Offensive (Beirut/Dahieh, Litani-Fluss) mit einer vollständigen Hormus-Blockade; neue Drohnenangriffe auf Golfstaaten sind schon in dieser Nacht erfolgt (von den USA abgefangen). Zusätzlich droht der Iran eine Schließung der Straße von Bab el-Mandeb über die Huthi-Miliz im Jemen — ein zweiter Engpass im Welthandel. Ein Streik in der norwegischen Öl- und Gasindustrie droht ab dem 5. Juni (Statfjord A, Ula, Draugen, Oseberg). Trumps wiederholte Zusagen für einen Iran-Deal „binnen einer Woche" verlieren an Glaubwürdigkeit. Positiv: Deutsche und europäische Speicher füllen sich über dem Soll-Niveau, auch Rehden wird kontinuierlich gefüllt. El-Niño-Hitze in Asien treibt LNG-Konkurrenz strukturell höher.
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
              Brent ist bullish und wurde am 1. Juni nach Irans Friedensgespräch-Ausfall und Israels Libanon-Offensive deutlich fester. Die Drohung mit Bab el-Mandeb (Huthi-Miliz) und das norwegische Streikrisiko ab dem 5. Juni stützen weiter. Russlands Ölförderung sinkt strukturell. Negativ: Trump dementiert den iranischen Verhandlungsstop und erwartet dennoch eine Einigung „binnen einer Woche" — das beruhigt kurzfristig, ist aber für längerfristige Vorhersagen unzuverlässig. Eine Hisbollah-Waffenruhe entspannt zwischenzeitlich. US-Benzinpreise sind auf 4-Jahres-Highs gestiegen, was politischen Druck auf Trump aufbaut — das könnte am Ende auch de-eskalierend wirken.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
