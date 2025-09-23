import Example from "@/app/components/CodeExample";
import type { ArticleSection } from "@/app/data/types";
import styles from '../subject/sub.module.css';
import Link from "next/link";

type Props = {
  content: ArticleSection[];
};

export default function ArticleRenderer({ content }: Props) {
  return (
    <article>
  {content.map((section, index)=> (
    <section key={index}>
      <h2 className={styles.headline}>{section.title}</h2>

      {section.body?.map((p, i) => <p key={i} className={styles.content}>{p}</p>)}
{/* ^^ Hvis seksjonen har en body(Vanlig tekst avsnitt) looper vi gjennom hver tekst og rendrer det i en p-tag. */}

      {section.code && <Example code={section.code} className={styles.codeLine}/>}
{/* ^^ Hvis det finnes code i seksjonen, så vises det i Example komponentet. */}

      {section.list && (
        <ul className={styles.lists}>
          {section.list.map((li, i) => <li key={i}>{li}</li>)}
        </ul>
      )}
{/* ^^ Viser liste med forklaringer */}

       {section.images?.map((imgSrc, i) => (
            <img 
              key={i} 
              src={imgSrc} 
              alt={`Bilde ${i + 1} i seksjon: ${section.title}`}
              className={styles.sectImage}  
              />
          ))}
{/* ^^Viser bilder dersom det finnes i seksjonen. */}

      {section.note && <p className={styles.content}>{section.note}</p>}
{/* ^^Viser ekstra forklarings tekst dersom det finnes. */}

      {section.noteCode && <Example code={section.noteCode} className={styles.codeLine}/>}
{/* ^^Viser et lite ekstra kode eksempel */}
      {section.moreText && <p className={styles.content}>{section.moreText}</p>}

      {section.button && <div className={styles.btnBox}>
        <Link href={section.button.href}>
      <button className={styles.btn}>{section.button.text}</button>
      </Link>
      </div>
      }
      
      {section.subSections?.map((sub, i)=> (
        <div key={i}>
          <h3 className={styles.subHeadlines}>{sub.title}</h3>

          {sub.body?.map((p, x) => <p key={x} className={styles.content}>{p}</p>)}

          {sub.images?.map((imgSrc, i) => (
            <img 
              key={i} 
              src={imgSrc} 
              alt={`Bilde ${i + 1} i seksjon: ${section.title}`}
              className={styles.subImages}
              />
          ))}

          {sub.code && <Example code={sub.code} className={styles.codeLine} /> }

          {sub.list && (
              <ul className={styles.lists}>
              {sub.list.map((li, i) => <li key={i}>{li}</li>)}
              </ul>
          )}
          
          {sub.note && <p className={styles.content}>{sub.note}</p>}

          {sub.moreText && <p className={styles.content}>{sub.moreText}</p>}
        </div>
// Her vises subseksjoner (om det finnes) som egene blokker inni hovedseksjonen. 
      ))}
    </section>
  ))}
    </article>
  );
}