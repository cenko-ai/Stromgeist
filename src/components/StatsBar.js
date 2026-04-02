export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-inner">
        <div>
          <div className="stat-num">34%</div>
          <div className="stat-label">Haushalte zahlen zu viel</div>
        </div>
        <div>
          <div className="stat-num">€800</div>
          <div className="stat-label">Ø Einsparpotenzial pro Jahr</div>
        </div>
        <div>
          <div className="stat-num">8</div>
          <div className="stat-label">Artikel & Praxisberichte</div>
        </div>
        <div>
          <div className="stat-num">1×</div>
          <div className="stat-label">Markteinschätzung pro Woche</div>
        </div>
      </div>
    </div>
  );
}
