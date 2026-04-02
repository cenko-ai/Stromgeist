import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <span>© 2026 Stromgeist — Matthias Kirsch</span>
        <div className="footer-links">
          <Link href="/legal/impressum">Impressum</Link>
          <Link href="/legal/datenschutz">Datenschutz</Link>
          <Link href="/legal/affiliate">Affiliate-Hinweis</Link>
        </div>
      </div>
    </footer>
  );
}
