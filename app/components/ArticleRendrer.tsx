import Example from "@/app/components/CodeExample";
import type { ArticleSection } from "@/app/content/types";

type Props = {
  content: ArticleSection[];
};

export default function ArticleRenderer({ content }: Props) {
  return (
    <article>
  {content.map((section, index)=> (
    <section key={index}>
      <h2>{section.title}</h2>
      {section.body?.map((p, i) => <p key={i}>{p}</p>)}
{/* ^^ Hvis seksjonen har en body(Vanlig tekst avsnitt) looper vi gjennom hver tekst og rendrer det i en p-tag. */}
      {section.code && <Example code={section.code}/>}
{/* ^^ Hvis det finnes code i seksjonen, så vises det i Example komponentet. */}
      {section.list && (
        <ul>
          {section.list.map((li, i) => <li key={i}>{li}</li>)}
        </ul>
      )}
{/* ^^ Viser liste med forklaringer */}
      {section.note && <p>{section.note}</p>}
{/* ^^Viser ekstra forklarings tekst dersom det finnes. */}
      {section.noteCode && <Example code={section.noteCode}/>}
{/* ^^Viser et lite ekstra kode eksempel */}
      
      {section.subSections?.map((sub, i)=> (
        <div key={i}>
          <h3>{sub.title}</h3>
          {sub.body?.map((p, x) => <p key={x}>{p}</p>)}
          {sub.images?.map((imgSrc, i) => (
            <img 
              key={i} 
              src={imgSrc} 
              alt={`Bilde ${i + 1} i seksjon: ${section.title}`} 
              />
          ))}
          {sub.code && <Example code={sub.code}/>}
          {sub.note && <p>{sub.note}</p>}
        </div>
// Her vises subseksjoner (om det finnes) som egene blokker inni hovedseksjonen. 
      ))}
    </section>
  ))}
    </article>
  );
}