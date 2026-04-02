"use client";

import { useState } from "react";

export default function SavingsSlider() {
  const [monthlyCost, setMonthlyCost] = useState(120);

  // Einfache Heuristik: Sehr hoher Abschlag = höheres Sparpotenzial (bis zu einem Cap)
  // Nehmen wir an, wer z.B. oft noch in der Grundversorgung steckt, zahlt ca. 25% zu viel.
  const calculateSavings = (cost) => {
    return Math.round(cost * 12 * 0.25);
  };

  const currentSavings = calculateSavings(monthlyCost);

  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: "24px",
        marginTop: "32px",
        backdropFilter: "blur(12px)",
        maxWidth: "500px",
      }}
    >
      <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "16px", color: "white" }}>
        Finde heraus, was du sofort sparen kannst
      </h3>
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", fontSize: "13px", color: "var(--text-muted)", marginBottom: "8px" }}>
          Dein aktueller Monatsabschlag: <strong style={{color: 'white'}}>{monthlyCost} €</strong>
        </label>
        <input
          type="range"
          min="40"
          max="300"
          step="5"
          value={monthlyCost}
          onChange={(e) => setMonthlyCost(parseInt(e.target.value))}
          style={{ width: "100%", accentColor: "var(--green)" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--text-faint)", marginTop: "4px" }}>
          <span>40 €</span>
          <span>300 €</span>
        </div>
      </div>
      
      <div style={{ background: "rgba(16, 185, 129, 0.1)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(16, 185, 129, 0.2)", marginBottom: "20px" }}>
        <div style={{ fontSize: "13px", color: "var(--green)", marginBottom: "4px" }}>Geschätztes verstecktes Sparpotenzial:</div>
        <div style={{ fontFamily: "var(--font-serif)", fontSize: "28px", color: "white", lineHeight: "1" }}>~ {currentSavings} € / Jahr</div>
      </div>

      <a
        href="https://partner.verivox.de/go.cgi?pid=6744&wmid=37&cpid=1&prid=93&subid=&target=stromvergleich_2019-09"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
        style={{ display: "block", textAlign: "center", textDecoration: "none" }}
      >
        Jetzt kostenlos Tarife checken →
      </a>
    </div>
  );
}
