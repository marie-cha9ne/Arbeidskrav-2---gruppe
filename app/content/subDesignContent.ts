import type { ArticleSection } from "../data/types";

export const subDesignContent: ArticleSection[] = [
  {
    title:"Design",
    body:[
      "En viktig del av webutvikling er at koden man lagerer så brukervennlig, slik at de som skal ta i bruk av applikasjonen eller nettstedet ditt enkelt kan navigere mellom ulike deler, finne det de leter etter, og at man ikke blir forstyrret av unødvendige elementer. Brukervennlig design er et eget område innen webutvikling, og kalles User Experience Design (UX Design)."
    ],
    subSections:[
      {
        title:"Universell utforming: nettet skal være for alle!",
        body:[
          "I tillegg bør produktet du lager være  laget slik at brukere med nedsatt syn, hørsel eller andre funksjonsnedsettelser kan få like mye nytte ut av det som en person som ikke har nedsatte funksjonsevner. Dette kalles universell utforming, og betyr at produktet skal være brukervennlig for så mange mennesker som mulig, uansett funksjonsevne. Ofte vil disse tiltakene være til nytte for personer med full funksjonsevne. For eksempel er å tekste videoer gjort for at de som ikke hører skal kunne få med seg hva som blir sagt i en video, også nyttig for folk som sitter på bussen uten hodetelefoner som vil få med seg innholdet. Andre regler for universell utforming er god nok kontrast mellom forgrunn og bakgrunn, slik at teksten er lesbar. "
        ],
        images:[
          "/design-images/goodcontrastexample.png",
          "/design-images/badcontrastexample.png"
        ],
        note:"Det er også kjempeviktig å legge til alt-tekster på bilder du bruker i produktet ditt, slik at personer som bruker skjermlesere får med seg innholdet. Dette er også nyttig for andre og, for eksempel hvis bildet ikke lastes inn på siden, vil brukeren fortsatt få med seg hva bildet består av",
        code:` 
     <img 
       src="/dogs.jpg" 
       alt="To dalmantinere sitter pent og ser inni kameraet, i bakgrunnen er det en oransje solnedgang" 
           />`,
      },
    ]
  },
  {
    title:"Designprosessen: en iterativ prosess",
    body:[
      "Ofte vil UX-designere benytte seg av 'The Design Thinking Method' for å designe brukervennlige løsninger. Det er en iterativ prosess, som vil si at man ofte går tilbake og iterer løsningen sin ettersom ny innsikt og kunnskap dukker opp. Prosessen deless opp i 5 deler:"
    ],
    list:[
      "Empati: : Her forsker designerne på hvem brukerne er, setter seg inn i deres problemstillinger og utfordringer, for å identifisere seg med brukerne. Empati er sentralt for å skape brukersentrerte løsninger.",
      "Definere: Her tar designerne med seg den nye kunnskapen, og bruker dette til å skape et klarere bilde av problemstillingen.",
      "Ideer:  Med utgangspunkt i den definerte problemstillingen, og gjerne personas og brukerhistorier, holder designere workshops for å komme på et vidt spekter av ideer for å løse problemet. Her er det en fordel å være åpen og tenke utenfor boksen slik at man kan skape en innovativ løsning som faktisk gjør en forskjell.",
      "Prototype: Når ideene er sortert og man har kommet fram til en ide man vil jobbe videre på, starter man med prototyping for å lage en visuell skisse av løsningen. Det er lurt å starte enkelt med papir og penn for å utforske flere løsninger for layout, informasjonsarkitektur og sortering. Etterhvert som man får testet disse, tar man med seg de nye innsiktene og kan begynne på en digital prototype. Det gjør det også enklere for andre på teamet å visualisere løsningen.",
      "Teste: Ved å teste prototypene får vi uvurdelig tilbakemelding på om det vi har tenkt faktisk er forståelig og brukbart. Sitter man alene med en prototype kan man lett se seg blind og tenke at det er kjempelett fordi jeg forstår det! Litt som med koding og, ved å få noen andre til å teste løsningen dukker det opp ny innsikt man aldri kunne tenkt på selv. Ved å teste med brukere som er tiltenkt målgruppen, får man også gode tilbakemeldinger på om løsningen faktisk vil hjelpe dem med sine utfordringer."
    ],
    images:["/design-images/designthinking.png"],
  }
]