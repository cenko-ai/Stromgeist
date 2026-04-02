import Link from "next/link";

export default function ArticleCard({ title, meta, icon, slug }) {
  return (
    <Link href={`/artikel/${slug}`}>
      <div className="article-item" style={{ cursor: "pointer" }}>
        <div className="article-icon">{icon}</div>
        <div>
          <div className="article-title">{title}</div>
          <div className="article-meta">{meta}</div>
        </div>
      </div>
    </Link>
  );
}
