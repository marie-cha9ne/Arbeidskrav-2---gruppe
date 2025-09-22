import type { ArticleSection } from "../data/types";

export const subjectJsContent: ArticleSection[] =[{
  title: "Hva er JavaScript?",
  body:[
    "Javascript er et av de mest brukte programmeringsspråkene i verden, spesielt for utvikling av nettsider. Det gjør nettsteder interaktive, dynamiske og responsive. JavaScript brukes til alt fra å validere skjemaer til å lage avanserte applikasjoner i nettleseren.",
    "Sammen med HTML & CSS utgjør JavaScript kjærnen av webutvikling:"
  ],
  list:[
    "HTML definerer struktur og innhold",
    "CSS tar seg av utseende og layout",
    "JavaScript håndterer logikk og interaktivitet"
  ],
  note:"Med moderne JavaScript-rammeverk som React og Next.js kan man også bruke JavaScript til å bygge hele applikasjoner!",
},
{
  title: "Objekter",
  body:[
    "Et objekt er en måte å samle informasjon på i små pakker. Du kan tenkepå det som en perm med faner, der hver fane har et navn (nøkkel) og inneholder en verdi (informasjonen).",
    "et eksempel på et Objekt:"
  ],
  code:`
  const user = {
        name: "Jane Doe",
        age: 26,
        isStudent: true, 
        };
        `,
  list:[
    "navn - Jane Doe",
    "alder - 25",
    "isStudent - true (boolsk verdi true/false)"
  ],
  note:" for å hente ut denne informasjonen kan vi bruke console.log() som dette:",
  noteCode: "console.log(user.name)",
  moreText: "For å se den uthentede informasjonen høyreklikker du på siden - klikk på inspiser/inspect og gå til console. der vil du se at navnet gitt i objektet vises. Objekter er veldig nyttige når vi skal representere ting som finnes i virkeligheten - f.eks en bruker, en vare i en nettbutikk eller en artikkel.",
},
{
  title: "Arrays",
  body:[
    "Et array er en liste med ting, som ligger etter hverandre i en bestemt rekkefølge. Tenk på det som en handleliste: først står melk, så brød, så ost. eksempel:"
  ],
  code:`
  const shoppingList = ["melk", "brød", "ost"];
  `,
  note:"   Når noe i javascript skal telles starter tellingen alltid på 0 så i eksempelet over er rekkefølgen på listen:",
  list:[
    "Første element [0] er melk",
    "Andre element [1] er brød",
    "Tredje element [2] er ost"
  ],
  moreText:` Arrays er nyttige når du skal bruke flere verdier av samme type - for eksempel en liste med brukere, tall eller produkter.`,
},
{
  title:"Array metoder",
  body:[
    "Ofte når vi må jobbe med lister kan vi bruke spesielle metoder som gjør utførelsen av koden enklere. Her er noen metoder som du kanskje kan få bruk for senere."
  ],
  subSections:[
    {
      title:"Map()",
      body:[
        "Med map() kan vi lage et nytt array basert på en endring av hvert element i det opprinnelige arrayet. map-metoden returnerer et nytt array med resultatet av en funksjon for hvert element."
      ],
      code:`
      const numbers = [1, 2, 3];
      const doubled = numbers.map((number)=> number * 2);

      console.log(doubled); 
            
      //Output: [2, 4, 6]`,

      note:"Her brukes map() for å gå gjennom listen og gange verdiene inni arrayet med 2.",
    },
    {
      title:"Filter()",
      body:[
        "Med filter() kan ci lage et nytt array som bare inneholder elementer som oppfyller en bestemt betingelse."
      ],
      code:`
  const animals = ["Hund", "Katt", "Høne", "Pappegøye", "Undulat", "Hest"];

  const animalContainingH = animals.filter((animal) => animal.includes("h"));

  console.log(animalContainingH);

  //Output: ["Hund", "Høne", "Hest"]
      `,
      note:"Her brukes filter() for å gå gjennom arrayet for å finne verdiene som har bokstaven 'H' i seg. Deretter returneres det et nytt array med verdiene som tilfredstiller betingelsen"
    },
    {
      title:"Push()",
      body:[
        "Push() brukes til å legge til nye elemeenter på slutten av et array."
      ],
      code:`
      const food = ["Burger", "Pizza"];
      food.push("Pasta");

      console.log(food);
      //Output: ["Burger", "Pizza", "Pasta"]
      `,
      note:"Her legger vi til en ny matrett i slutten av listen."
    },
    {
      title:"Concat()",
      body:[
        "Med concat() kan vi slå sammen to arrays."
      ],
      code:`
      const list1 = ["a", "b"];
      const list2 = ["c", "d"];

      const combined = list1.concat(list2);

      console.log(combined);
      //Output: ["a", "b", "c", "d"]
      `,
      note:"Her legger vi sammen array nr1 med nr2. Arrayet nevnt inni parantesene i concat blir lagt til i slutten av listen."
    }
  ],
},
{
  title:"If-statements",
  body:[
    "If-statements er som små veiskilt i koden. 'Hvis noe er sant, gå denne veien. Hvis ikke gå en annen vei.'"
  ],
  code:`
  const age = 17;

  if(age >= 18){
  cosnole.log("Du er myndig");
  }else{
    console.log("Du er ikke myndig enda");
    }
  `,
  list:[
    "Koden sjekker først: er alder større eller lik 18?",
    "Hvis ja -- skriv ut 'Du er myndig'",
    "Hvis nei -- skriv ur 'Du er ikke myndig enda'"
  ],
  note:"Dette er grunnlaget for logikken i koden -vi kan bestemme hva som skal skje basert på situasjonen.",
},
{
  title:"Loops / Løkker",
  body:[
    "  En loop brukes når du vil gjøre samme handlingen flere ganger, for eksempel gå gjennom alle elementene i et array. I stedet for å skrive samme kode gjentatte ganger, kan man lage en loop. Det finnes forskjellige typer loops man kan bruke. som blant annet:"
  ],
  subSections:[
    {
      title:"For-loop",
      body:[
        "For-loop er en type loop som lar deg gjenta en blokk med kode et bestemt antall ganger. Den er nyttig når du vet hvor mange ganger du vil utføre koden. for eksempel for å behandle alle elementene i et array."
      ],
      code:`
      for(let i = 0; i < 5; i++){
      console.log(i);
      };

      //Output: 0 1 2 3 4
      `,
      list:[
        "Løkken starter med å sette en start variabel på i:'let i = 0;'",
        "For hver loop sjekkes en betingelse: 'Hvis i er mindre enn 5/ i < 5'. Hvis betingelsen er sann, fortsett loopen",
        "Loopen kjøres",
        "For hver loop øker i med 1: 'i++'"
      ]
    },
    {
      title:"While-loop",
      body:[
        "While-loop brukes som regel når du ikke vet hvor mange ganger du må gjenta koden, men du vet en betingelse som må oppfylles for at loopen skal stoppe."
      ],
      code:`
      let counter = 0;

      while(counter <= 5){
      console.log(counter);
      counter++;
      }

      //Output: 0 1 2 3 4 5
      `,
      note:"Her lager vi en counter som starer på 0. While-loopen sier: 'Så lenge counter er mindre enn eller lik 5, vil loopen kjøre. Console kjører ut verdien av counter og counter øker med 1 for hver runde til den når 5. Når counter går inn for sin 6 runde er ikke betingelsen i while-loopen lenger sann, og loopen avsluttes.'"
    }
  ]
},
{
  title:"Oppsummering"
}
]