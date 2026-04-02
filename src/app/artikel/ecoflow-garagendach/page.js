import ArticleLayout from "@/components/ArticleLayout";
import Image from "next/image";

export const metadata = {
  title: "Mein Garagendach erzeugt Strom — EcoFlow Praxisbericht | Stromgeist",
  description: "Erfahrungsbericht zur Autarkie mit EcoFlow Speichern und Balkonkraftwerken.",
};

export default function ArticleEcoFlow() {
  return (
    <ArticleLayout>
      <h1>Mein Garagendach erzeugt Strom — wie EcoFlow mein Zuhause teilweise autark macht</h1>
      <div className="article-byline">Von Stromgeist · März 2026 · Praxisbericht</div>

      <div className="article-content">
        <p>Ich bin Portfoliomanager im Energiebereich und beobachte Strompreise täglich. Trotzdem wollte ich aktiv werden. Das Ergebnis: drei EcoFlow-Speicher.</p>

        <h2>Die Ausgangslage: Garagendach statt Hausdach</h2>
        <p>Viele denken sofort ans Hausdach. Ich habe einen anderen Weg gewählt: mein Garagendach. Meine Module sind bewusst unterschiedlich ausgerichtet (Ost-West), um den Ertrag zu strecken.</p>
        
        <Image 
          src="/valkbox2.jpg" 
          alt="Solarmodule auf dem Dach" 
          width={800} height={400} 
          style={{ width: '100%', borderRadius: '10px', marginTop: '16px', objectFit: 'cover' }}
        />

        <h2>Die drei EcoFlow-Geräte</h2>
        <p>Ich nutze drei Geräte parallel: den EcoFlow STREAM Ultra, den EcoFlow STREAM Max und die EcoFlow AC Pro.</p>

        <hr />

        <div className="article-links">
          <h4>Direkt ansehen</h4>
          <a href="#" target="_blank" rel="noopener noreferrer">EcoFlow Speicher</a>
        </div>
      </div>
    </ArticleLayout>
  );
}
