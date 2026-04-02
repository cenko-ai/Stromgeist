import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ArticleLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="article-page" style={{ display: "block", animation: "fadeIn 0.4s ease" }}>
        <Link href="/" className="back-btn" style={{ textDecoration: "none" }}>
          ← Zurück zur Übersicht
        </Link>
        {children}
      </div>
      <Footer />
    </>
  );
}
