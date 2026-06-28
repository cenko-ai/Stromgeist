export default function MarktWidget() {
  return (
    <section className="markt-section" id="markt">
      <div className="markt-inner">
        <a
          href="https://energie-markt.eu"
          target="_blank"
          rel="noopener noreferrer"
          className="markt-link-card"
        >
          <div className="markt-link-icon">📈</div>
          <div className="markt-link-content">
            <div className="markt-link-title">Wöchentliche Markteinschätzung</div>
            <p className="markt-link-text">
              Meine ausführliche Analyse zu Strom, Gas und Öl gibt es jetzt drüben auf energie-markt.eu — aktuelle Charts, Hintergründe und Einschätzungen direkt aus dem Handel.
            </p>
          </div>
          <div className="markt-link-arrow">→</div>
        </a>
      </div>
    </section>
  );
}
