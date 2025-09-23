import type { ArticleSection } from "../data/types";

export const subDesignContent: ArticleSection[] = [
  {
    title:"Designprinsipper i webutvikling",
    body:[
      "En viktig del av webutvikling er at koden man lager er så brukervennlig, slik at de som skal ta i bruk av applikasjonen eller nettstedet ditt enkelt kan navigere mellom ulike deler, finne det de leter etter, og at man ikke blir forstyrret av unødvendige elementer. Godt design handler ikke bare om hvordan noe ser ut, men også hvordan noe fungerer. Brukervennlig design er et eget område innen webutvikling, og kalles User Experience Design (UX Design)."
    ],
    subSections:[
      {
        title:"Universell utforming: nettet skal være for alle!",
        body:[
          "I tillegg bør produktet du lager være  laget slik at brukere med nedsatt syn, hørsel eller andre funksjonsnedsettelser kan få like mye nytte ut av nettstedet som en person som ikke har nedsatte funksjonsevner. Dette kalles universell utforming, og betyr at produktet skal være brukervennlig for så mange mennesker som mulig, uansett funksjonsevne. Ofte vil disse tiltakene være til nytte for personer med full funksjonsevne.",
          "Eksempler på universell utforming kan være: Teksting av videoer hjelper både de som er hørselshemmet og de som ser på video uten lyd (f.eks på bussen). Alt-tekst på bilder gjør at personer med skjermlesere kan forstå bildets innhold - og det hjelper også hvis bildet ikke lastes inn. God kontrast mellom tekst og bakgrunn gjør innholdet lettere å lese - spesielt for svaksynte."
        ],
        images:[
          "/design-images/goodcontrastexample.png",
          "/design-images/badcontrastexample.png"
        ],
        note:"Det er også kjempeviktig å legge til alt-tekster på bilder du bruker i produktet ditt, slik at personer som bruker skjermlesere får med seg innholdet. Dette er også nyttig for andre og, for eksempel hvis bildet ikke lastes inn på siden, vil brukeren fortsatt få med seg hva bildet består av",
        code:` 
     <img 
       src="/dogs.jpg" 
       alt="To dalmantinere sitter pent og ser inni kameraet, 
       i bakgrunnen er det en oransje solnedgang" 
           />`,
      },
    ],
  },
  {
    title:"Farger og kontraster",
    body:[
      "Fargebruk i webdesign handler ikke bare om estetikk, det påvirker lesbarhet, stemning, navigasjon.",
      "For å sikre at innhold er lesbart for flest mulig:"
    ],
    list:[
      "Bruk sikkelig kontrast mellom tekst og bakgrunn. Svart tekst på lys bakgrunn er ofte det tryggeste valget.",
      "Ikke bruk farge alene for å formidle viktig informajson. For eksempel: ikke marker feilmeldinger på siden kun med rødt, legg til et ikon eller tekst også."
    ],
  },
  {
    title:"Typografi og skriftstørrelser",
    body:[
      "God typografi handler om lesbarhet og hierarki. Altså hvordan brukeren enkelt kan skille overskrifter, brødtekst og knapper fra hverandre.",
      "Noen viktige prinsipper:"
    ],
    list:[
      "Bruk klare, lesbare skrifttyper - helst sans-serif på skjerm (Aom Arial, Roboto eller Open Sans).",
      "Ha tydelig visuell forskjell mellom overskrifter og brødtekst.",
      "Sørg for tilstrekkelig linjeavstand (line-height). Dette gør tekst mindre slitsomt å lese.",
      "Ikke bruk for liten skrift, minimum 16px for brødtekst er standard."
    ],
    subSections:[
     {
       title:"Bruk em eller rem, istedet for px",
       body:[
        "Når du setter størrelsen på tekst, bør du helst bruke relative enheter som em eller rem istedet for px.",
        "1rem betyr 'lik størrelsen på rootelementet' (som regel 16px). Dette gjør at siden skalerer bedre på forskjellige skjermstørrelser og følger brukerens instillinger. Det er også viktig for tilgjengelighet, siden mange brukere endrer standard skriftstørrelse i nettleseren sin.",
        "Eksempel:"
       ],
       code:`
       p{
        font-size: 1rem; /* Ikke 16px */
       }
       `,
     }
    ]
  },
  {
    title:"Designprosessen: en iterativ prosess",
    body:[
      "Ofte vil UX-designere benytte seg av 'The Design Thinking Method' for å designe brukervennlige løsninger. Det er en iterativ prosess, som vil si at man ofte går tilbake og iterer løsningen sin ettersom ny innsikt og kunnskap dukker opp. Prosessen deless opp i 5 deler:"
    ],
    list:[
      "Empati: Her forsker designerne på hvem brukerne er, setter seg inn i deres problemstillinger og utfordringer, for å identifisere seg med brukerne. Empati er sentralt for å skape brukersentrerte løsninger.",
      "Definere: Her tar designerne med seg den nye kunnskapen, og bruker dette til å skape et klarere bilde av problemstillingen.",
      "Ideer:  Med utgangspunkt i den definerte problemstillingen, og gjerne personas og brukerhistorier, holder designere workshops for å komme på et vidt spekter av ideer for å løse problemet. Her er det en fordel å være åpen og tenke utenfor boksen slik at man kan skape en innovativ løsning som faktisk gjør en forskjell.",
      "Prototype: Når ideene er sortert og man har kommet fram til en ide man vil jobbe videre på, starter man med prototyping for å lage en visuell skisse av løsningen. Det er lurt å starte enkelt med papir og penn for å utforske flere løsninger for layout, informasjonsarkitektur og sortering. Etterhvert som man får testet disse, tar man med seg de nye innsiktene og kan begynne på en digital prototype. Det gjør det også enklere for andre på teamet å visualisere løsningen.",
      "Teste: Ved å teste prototypene får vi uvurdelig tilbakemelding på om det vi har tenkt faktisk er forståelig og brukbart. Sitter man alene med en prototype kan man lett se seg blind og tenke at det er kjempelett fordi jeg forstår det! Litt som med koding og, ved å få noen andre til å teste løsningen dukker det opp ny innsikt man aldri kunne tenkt på selv. Ved å teste med brukere som er tiltenkt målgruppen, får man også gode tilbakemeldinger på om løsningen faktisk vil hjelpe dem med sine utfordringer."
    ],
    images:["/design-images/designthinking.png"],
  },
  {
    title:"Oppsummering",
    body:[
      "På denne siden skal du ha lært at design er en sentral del av webutvikling, og handler om mer enn bare utseende. Universell utforming sikrer at alle (uansett funksjonsevne) kan bruke nettstedet. Farger og kontrasster påvirker både lesbarhet og tilgjengelighet. Typografi og skriftstørrelser må være tilpasset skjerm og brukere, og bør være fleksible med enheter som rem. Design er en iterativ prosess, der testing og inniskt fra brukerne former sluttresultatet. Et godt design gjør ikke nettsiden bare pen, men nyttig, tilgjengelig og enkel å bruke."
    ]
  }
]