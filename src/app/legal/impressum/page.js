import ArticleLayout from "@/components/ArticleLayout";

export default function Impressum() {
  return (
    <ArticleLayout>
      <h1>Impressum</h1>
      <div className="article-byline">Angaben gemäß § 5 TMG</div>
      <div className="article-content">
        <h2>Betreiber</h2>
        <p>Matthias Kirsch<br />Jakob-Engels-Str. 47<br />51143 Köln<br />Deutschland</p>
      </div>
    </ArticleLayout>
  );
}
