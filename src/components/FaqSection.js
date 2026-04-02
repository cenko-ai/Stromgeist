"use client";

import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqs = [
    {
      q: "Kann es beim Anbieterwechsel passieren, dass ich kurzzeitig keinen Strom oder Gas bekomme?",
      a: "Nein — das ist gesetzlich ausgeschlossen. Die Versorgung läuft ununterbrochen weiter. Der neue Anbieter koordiniert den Wechsel mit dem Netzbetreiber, der die Leitungen betreibt. Du merkst vom Wechsel nichts außer einem neuen Absender auf deiner Jahresabrechnung."
    },
    {
      q: "Muss ich meinen alten Vertrag selbst kündigen?",
      a: "In der Regel nicht. Der neue Anbieter übernimmt die Kündigung für dich — das ist heute Standard bei allen seriösen Anbietern. Du gibst beim Abschluss des neuen Vertrags einfach deinen bisherigen Anbieter an, der Rest läuft automatisch."
    },
    {
      q: "Warum ist mein Strompreis nicht gesunken, obwohl die Börsenpreise fallen?",
      a: "Weil der Börsenpreis nur etwa 20–25% deiner Rechnung ausmacht. Der Rest sind Netzentgelte, Steuern und Abgaben — die steigen sogar. Außerdem kaufen Versorger ihren Strom auf Termin (Hedging), oft Monate im Voraus. Günstigere Börsenpreise von heute kommen erst mit Verzögerung bei dir an."
    },
    {
      q: "Lohnt sich ein Heimspeicher ohne eigene PV-Anlage?",
      a: "Kaum. Ein Heimspeicher macht erst Sinn wenn du Strom hast der gespeichert werden kann — also eigene Solarproduktion. Ohne PV würdest du den Speicher mit teurem Netzstrom laden und wieder entladen, was keinen wirtschaftlichen Vorteil bringt. Mit einem dynamischen Tarif wie Tibber gibt es Ausnahmen — aber auch da ist der Effekt ohne PV gering."
    },
    {
      q: "Was ist der Unterschied zwischen Grundversorger und Wettbewerber?",
      a: "Der Grundversorger ist der lokale Anbieter der jeden Haushalt ohne Vertrag automatisch versorgen muss — gesetzlich vorgeschrieben als Sicherheitsnetz. Weil er diese Pflicht hat, darf er auch höhere Preise verlangen. Wettbewerber sind freie Anbieter ohne diese Pflicht — sie müssen attraktiv sein um Kunden zu gewinnen, was sie in der Regel günstiger macht."
    },
    {
      q: "Wie groß sollte mein Heimspeicher sein?",
      a: "Als Faustregel gilt: 1 kWh Speicher pro 1.000 kWh Jahresstromverbrauch. Ein typischer Haushalt mit 3.500 kWh Jahresverbrauch kommt gut mit 5–7 kWh aus. Mehr bringt bei kleinen PV-Anlagen wenig, weil der Speicher im Sommer nie voll ausgereizt wird und im Winter ohnehin nicht genug Solarstrom kommt."
    },
    {
      q: "Lohnt sich Tibber für mich?",
      a: "Tibber lohnt sich wenn du steuerbare Lasten hast — also eine Wallbox, Wärmepumpe oder Heimspeicher die du zeitlich verschieben kannst. Wer einfach nur Strom verbraucht wenn er ihn braucht, ist mit einem guten Festpreistarif oft besser bedient. Mit Wallbox und aktivem Lastmanagement sind Einsparungen von 100–400 Euro pro Jahr realistisch."
    },
    {
      q: "Sollte ich 2026 noch eine PV-Anlage kaufen?",
      a: "Ja — und zwar bald. Die Bundesregierung diskutiert die Kürzung der Einspeisevergütung, und Modulpreise könnten durch geopolitische Entwicklungen steigen. Wer jetzt kauft, sichert sich günstige Modulpreise und noch laufende Vergütung. Die Amortisationszeit liegt bei guten Anlagen heute bei 8–12 Jahren, bei einer Lebensdauer von 25–30 Jahren."
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-inner">
        <p className="section-label">Häufige Fragen</p>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="faq-item">
                <button 
                  className={`faq-q ${isOpen ? "open" : ""}`} 
                  onClick={() => toggleFaq(index)}
                >
                  {faq.q}
                  <span className="faq-arrow">↓</span>
                </button>
                <div className={`faq-a ${isOpen ? "open" : ""}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
