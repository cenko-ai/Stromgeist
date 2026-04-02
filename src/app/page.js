import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsBar from "@/components/StatsBar";
import MarktWidget from "@/components/MarktWidget";
import ArticleCard from "@/components/ArticleCard";
import SavingsSlider from "@/components/SavingsSlider";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <div className="home-page">
        <section className="hero">
          <div className="badge">Energiemarkt · Aus der Praxis · Seit 2026</div>
          <h1>
            Energie verstehen,<br />
            <em>Geld sparen.</em>
          </h1>
          <p className="hero-sub">
            Strompreise, PV, Tarife und Heimspeicher — erklärt von einem Portfoliomanager, der täglich mit diesen Märkten arbeitet.
          </p>
          
          <SavingsSlider />

          <div className="trust-row" style={{ marginTop: '48px' }}>
            <span>Portfoliomanager Strom & Gas</span>
            <div className="trust-dot"></div>
            <span>15+ Jahre Marktexpertise</span>
            <div className="trust-dot"></div>
            <span>Affiliate-Links klar gekennzeichnet</span>
          </div>
        </section>

        <StatsBar />

        <MarktWidget />

        <div className="vergleich-bar">
          <div className="vergleich-inner">
            <span className="vergleich-label">Direkt vergleichen</span>
            <div className="vergleich-links">
              <a href="https://partner.verivox.de/go.cgi?pid=6744&wmid=37&cpid=1&prid=93&subid=&target=stromvergleich_2019-09" target="_blank" rel="noopener noreferrer" className="vlink vlink-strom">Strom · Verivox</a>
              <a href="https://www.c24n.de/2rYlvHM" target="_blank" rel="noopener noreferrer" className="vlink vlink-strom">Strom · Check24</a>
              <a href="https://partner.verivox.de/go.cgi?pid=6744&wmid=40&cpid=1&prid=93&subid=&target=Oekostromvergleich_2019-09" target="_blank" rel="noopener noreferrer" className="vlink vlink-oeko">Ökostrom · Verivox</a>
              <a href="https://www.c24n.de/Vkxlwjs" target="_blank" rel="noopener noreferrer" className="vlink vlink-oeko">Ökostrom · Check24</a>
              <a href="https://partner.verivox.de/go.cgi?pid=6744&wmid=31&cpid=1&prid=99&subid=&target=gasvergleich_2019-09" target="_blank" rel="noopener noreferrer" className="vlink vlink-gas">Gas · Verivox</a>
              <a href="https://www.c24n.de/jXECb02" target="_blank" rel="noopener noreferrer" className="vlink vlink-gas">Gas · Check24</a>
            </div>
            <span className="vergleich-hint">Affiliate-Links · kostenlos für dich</span>
          </div>
        </div>

        <div className="main" id="themen">
          <div>
            <p className="section-label">Aktuell</p>
            <div className="featured-article">
              <div className="featured-top">
                <div className="featured-tag">Strompreise</div>
                <h2>Warum der Strompreis fällt – aber deine Rechnung nicht</h2>
              </div>
              <div className="featured-body">
                <p>
                  An den Energiebörsen sind die Preise deutlich gesunken. Trotzdem zahlen die meisten Haushalte noch immer wie in der Hochphase. Was steckt dahinter – und was kannst du jetzt konkret tun?
                </p>
                <a href="/artikel/warum-strompreis-faellt" className="read-more" style={{ cursor: "pointer", textDecoration: "none" }}>
                  Artikel lesen →
                </a>
              </div>
            </div>

            <p className="section-label" style={{ marginTop: "40px" }}>Weitere Artikel</p>
            <div className="article-list">
              <ArticleCard 
                icon="☀️"
                title="Mein Garagendach erzeugt Strom — wie EcoFlow mein Zuhause teilweise autark macht"
                meta="Photovoltaik & Heimspeicher · März 2026 · Praxisbericht"
                slug="ecoflow-garagendach"
              />
              <ArticleCard 
                icon="☀️"
                title="Lohnt sich PV 2026 noch? Jetzt kaufen — bevor es teurer wird"
                meta="Photovoltaik · März 2026"
                slug="pv-2026"
              />
              <ArticleCard 
                icon="🔋"
                title="Heimspeicher: Warum ich fast 100% meiner Sonnenenergie selbst nutze"
                meta="Heimspeicher · März 2026"
                slug="heimspeicher"
              />
              <ArticleCard 
                icon="🔄"
                title="Stromtarif wechseln — so geht es richtig"
                meta="Tarife · März 2026"
                slug="tarifwechsel"
              />
              <ArticleCard 
                icon="⚡"
                title="Dynamische Stromtarife — für wen lohnt sich Tibber wirklich?"
                meta="Tarife · März 2026"
                slug="tibber"
              />
              <ArticleCard 
                icon="🔧"
                title="Balkonkraftwerk auf dem Flachdach — Valkbox 3 Praxisbericht"
                meta="Photovoltaik · März 2026 · Praxisbericht"
                slug="valkbox"
              />
            </div>
          </div>

          <div className="sidebar">
            <div className="topics-box">
              <div className="topics-header">Alle Themen</div>
              <Link href="/artikel/warum-strompreis-faellt" className="topic-row" style={{ textDecoration: "none", color: "inherit" }}>
                <span className="topic-emoji">⚡</span>
                <span className="topic-name">Strompreise</span>
                <span className="topic-count">1</span>
              </Link>
              <Link href="/artikel/pv-2026" className="topic-row" style={{ textDecoration: "none", color: "inherit" }}>
                <span className="topic-emoji">☀️</span>
                <span className="topic-name">Photovoltaik</span>
                <span className="topic-count">3</span>
              </Link>
              <Link href="/artikel/heimspeicher" className="topic-row" style={{ textDecoration: "none", color: "inherit" }}>
                <span className="topic-emoji">🔋</span>
                <span className="topic-name">Heimspeicher</span>
                <span className="topic-count">1</span>
              </Link>
              <Link href="/artikel/tarifwechsel" className="topic-row" style={{ textDecoration: "none", color: "inherit" }}>
                <span className="topic-emoji">🔄</span>
                <span className="topic-name">Tarife & Wechsel</span>
                <span className="topic-count">2</span>
              </Link>
              <div className="topic-row">
                <span className="topic-emoji">🏠</span>
                <span className="topic-name">Wärmepumpe</span>
                <span className="topic-count">bald</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-strip" id="ueber">
          <div className="about-inner">
            <div className="about-avatar">S</div>
            <div className="about-text">
              <h3>Wer steckt hinter Stromgeist?</h3>
              <p>
                Ich arbeite als Portfoliomanager Strom & Gas bei einem deutschen Energieversorgungsunternehmen und beobachte die Energiemärkte täglich aus nächster Nähe. Stromgeist ist mein Versuch, das Wissen aus der Branche für alle zugänglich zu machen — transparent, ohne Werbejargon und mit klarer Kennzeichnung wenn Links vergütet werden.
              </p>
            </div>
          </div>
        </div>

        <FaqSection />

      </div>
      <Footer />
    </>
  );
}
