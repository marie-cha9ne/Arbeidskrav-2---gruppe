import type { ArticleSection } from "../data/types";

export const subReactContent: ArticleSection[] = [
  {
    title: "Hva er React og JSX?",
    body: [
      "React er et åpent kildebibliotek utviklet av Facebook, bruk til å bygge interaktive og dynamiske brukergrensesnitt for nettsidenr og applikasjoner. Det er spesielt populært for sin komponentbaserte struktur.",
      "En av de viktigste delene av React er JSX, som står for JavaScript XML. JSX lar deg skrive HTML-lignene kode direkte i JavaScript. Dette gjør det enklere å strukturere brukergrensesnittet og frostå hvordan komponentene henger sammen visuelt.",
      "Eksempel på JSX:",
    ],
    code: `const element = <h1>Hei, React!</h1>;`,
    note: "JSX er ikke i React, men det gjør utviklingsopplevelsen mye bedre, og det er derfor det brukes nesten overalt i React-prosjekter.",
  },
  {
    title: "Hva er et komponent?",
    body: [
      "I React bygger vi brukergrensesnittet ved å sette sammen små, gjenbrukbare komponenter på en måte som byggeklosser. Hver komponent er en funksjon som returnerer brukergrensesnitt (JSX), og kan ha sin egen logikk, utseende og data",
      "Komponenter kan være så små som en knapp eller så store som en hel nettside. Du kan også bruke en komponent flere ganger, med ulike instillinger (props), noe som gjør det enklere å holde koden ryddig og organisert.",
      "Eksempel på et enkelt komponent:",
    ],
    code: `
      export default function Welcome(){
        return <h2>Velkommen til React!</h2>;
      }
    `,
    note: "For å bruke komponentet i en annen del av appen din, skriver du det som en vanlig HTML-tag:",
    noteCode: `
    export default function Home(){
    return(
    <main>
      <Welcome />
    </main>
      )
    }
    `,
    moreText:
      "Dette gjør koden mer organiert, gjenbrukbar og lett å vedlikeholde.",
  },
  {
    title: "Hva er state i React?",
    body: [
      "State er data som tilhører et komponent, og kan endres over tid, for eksempel når brukeren klikker på en knapp, skriver inn tekst i et felt, eller når data hentes fra et API. Når state endres, oppdateres komponenten automatisk, slik at brukergrensesnittet alltid viser riktig informasjon",
      "Du kan tenke på state som komponentens minne, det lagrer informasjon som er viktig for hvordan komponenten skal se ut og oppføre seg akkurat nå. React gir oss så kalte hooks for å jobbe med state og annenlogikk. De to vanligste er useState og useEffect.",
    ],
    subSections: [
      {
        title: "useState",
        body:[
          "useState kan ses på som å bruke en let-variabel i javaScript. der du definerer en state som er har den nåværende verdien, og en setState som oppdaterer variabelen."
        ],
        code: `
           import { useState } from "react";

           export default function Counter(){
           const [count, setCount] = useState(0);

           return(
            <div>
            <p>Du har trykket {count} ganger</p>
            <button onClick={() => setCount(count + 1)}>Trykk på meg</button>
           </div>
              );
            }
           `,
        list: [
          "useState(0) oppretter en state-variabel (count) med start verdi 0.",
          "Når brukeren klikker på knappen, oppdateres state via setCount.",
          "Komponentet rendres på nytt hver gang state endres.",
        ],
        note:"State gjør det mulig å lage interaktive og dynamiske nettsider, det er en av kjernedelene i det som gjør React så kraftfullt."
      },
      {
        title:"useEffect",
        body:[
          "useEffect brukes for å gjøre noe etter at komponentet har blitt rendret, f.eks. hente data eller starte en timer."
        ],
        code:`
        import { useState, useEffect } from "react";

        export default function Timer(){
          const [seconds, setSeconds] = useState(0);

          useEffect(() => {
            const interval = setInterval(() => {
              setSeconds((second) => second + 1);
            }, 1000);

            return () => 
          }, []);

            return <p>Tid: {seconds} sekunder</p>;
        }
        `,
        list:[
          "Her oppretter vi en timer som teller opp hvert sekund.",
          "useEffect starter når komponenten vises for første gang, og stopper når det fjernes."
        ]
      }
    ],
  },
  {
    title:"Props i React",
    body:[
      "I React brukes props/properties til å sende data fra en komponent til en annen. Det gjør det mulig å lage komponenter som er gjenbrukbare og fleksible, fordi man kan endre hva de viser ved å sende inn uliike verider som 'instillinger'.",
      "Når du lager et komponent, kan du tenke på props som argumentene du sender inn for å bestemme hvordan komponenten skal se ut eller oppføre seg."
    ],
    code:`
     //ParentComponent.jsx
    import ChildComponent from './ChildComponent';

    export default function ParentComponent(){
    const message = "Hallo fra Parent!";
    const user = { name: "Jonna", age: 35 };

    return(
      <ChildComponent message={message} userData={user} />
     );
    }
    `,
    note:"I eksempelet over definerer vi hvilke arbumenter vi trenger i komponentet vårt. Når vi rendrer child-komponentet, skal man sende inn props som atributter. I child-komponentet (i eksempelet under) får komponenten tilgang til props enten ved å definere props som parameter i funksjonen, eller ved destructuring metoden ved å definere spesifikt hva i props du skal ta i bruk.",
    noteCode:`
    //ChildComponent.jsx

    export default function ChildComponent(props){
    return(
      <div>
        <h1>{props.message}</h1>
        <p>User: {props.userData.name}, Age:{props.userData.age}</p>
      </div>
     );
    }

    //Eller dersom man bruker destructuring for ryddigere kode kan props brukes slik:
  export default function ChildComponent({ message, userData }){
    return(
      <div>
        <h1>{message}</h1>
        <p>User: {userData.name}, Age:{userData.age}</p>
      </div>
     );
    }
    `,
    moreText:"Props gjør det mulig å sende tekst, tall, funksjoner eller til og med andre komponenter. Dette gjør det mulig å bygge applikasjoner som er modulære, logiske og lett å vedlikeholde."
  },
  {
   title:"Hva er virtual DOM og hvorfor er det viktig?",
   body:[
    "Når du bygger en nettside, jobber du egentlig med DOM-en (Document Object Model) - som er måten HTML-struktue lagres og vises i nettleseren.",
    "Men den ekte DOM-en er treg å oppdatere, spesielt hvis mange ting endres samtidig.",
    "React løser dette med Virtual DOM:"
   ],
   list:[
    "En kopi av DOM-en holdes i minnet (det er 'virtual DOM').",
    "Når noe endres, oppdateres først denne kopien.",
    "React sammenligner den nye og gamle kopien (diffing).",
    "Kun de nødvendige delene av ekte DOM blir oppdatert.",
   ],
   note:"Applikasjonen blir mye raskere og mer effektiv, fordi React gjør færre og smartere oppdateringer."
  },
  {
    title:"Oppsummering",
    body:[
      "React er et moderne og kraftig verktøy som gjør det enklere å lage interaktive nettsteder og apper. Med komponenter kan ddu dele opp koden i små, gjenbrukbare deler. Med hooks som useState og useEffect kan du enkelt håndtere data og logikk inne i komponentene dine.",
      "JSX gjør det lett å skrive lesbar strukturert kode , og Virtual DOM sørger for at appen kjører raskt og effektivt.",
      "Enten du bygger en enkel nettside eller en stor webapp. React gir deg verktøyene du trenger or å lage moderne og robuste brukeropplevelser."
    ]
  }
];
