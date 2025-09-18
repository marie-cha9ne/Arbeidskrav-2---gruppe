export type MultipleChoice = {
  id: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  image?: string;
};

export const Tasks: MultipleChoice[] = [
  {
    id: 1,
    question: "Hva er de fem ulike “Design Thinking”-metodene?",
    option1: "Empati, definere, idéer, prototype, teste",
    option2: "Definere, empati, idéer, designe, teste",
    option3: "Snakke, tenke, dele, tegne, løse",
  },
  {
    id: 2,
    question:
      "Hva kalles teksten man legger på bilde-elementer i HTML for at brukere skal få med seg hva bildet er om de ikke kan se det?",
    option1: "Bildetekst",
    option2: "alt-tekst",
    option3: "Universaltekst",
  },
  {
    id: 3,
    question: "Hva blir logget ut her?",
    option1: `["Juice", "Smoothie", "Redbull", "Kaffe", "Eple", "Appelsin", "Pære", "Mango"]`,
    option2: `["Juice", "Smoothie", "Redbull", "Kaffe"]`,
    option3: `["Eple", "Appelsin", "Pære", "Mango", "Juice", "Smoothie", "Redbull", "Kaffe"]`,
    image: "/JavaScript-oppgaver/oppg1.png",
  },
  {
    id: 4,
    question: "Hva blir logget ut her?",
    option1: `hello, world, parent, box`,
    option2: `sun, rain`,
    option3: `hello, world, parent, box, sun, rain`,
    image: "/Javascript-oppgaver/oppg2.png",
  },
  {
    id: 5,
    question: "Hva blir logget ut her?",
    option1: `Log 1: Gratulerer Allen du er gammel nok til å ta deg en drink. Log 2: Allen! Du kan jo også kjøre!`,
    option2: `Log 1: Gratulerer Stella du er gammel nok til å ta deg en drink. Log 2: Stella! Du kan jo også kjøre!`,
    option3: `Log 1: Gratulerer Stella du er gammel nok til å ta deg en drink. Log 2: Sorry Stella, men du kan ikke kjøre..`,
    image: "/JavaScript-oppgaver/oppg3.png",
  },
  {
    id: 6,
    question: "Hva brukes props til i React?",
    option1: "Til å lagre interne tilstander i en komponent",
    option2: "Til å sende data fra en forelder til en barnekomponent",
    option3: "Til å style komponenter",
  },
  {
    id: 7,
    question: "Hva er en viktig fordel med Virtual DOM i React?",
    option1: "At all HTML kodes manuelt uten JavaScript",
    option2:
      "At endringer på siden skjer raskere fordi kun nødvendige deler av DOM oppdateres",
    option3: "At man slipper å bruke CSS",
  },
  {
    id: 8,
    question: "Hva er en komponent i React?",
    option1: "En funksjon eller klasse som returnerer UI og kan gjenbrukes",
    option2: "En ferdig CSS-fil for layout",
    option3: "En server som kjører JavaScript",
  },
  {
    id: 9,
    question: "Hva brukes state til i React?",
    option1:
      "Til å lagre og oppdatere data som kan endres over tid i en komponent",
    option2: "Til å sende data mellom forskjellige prosjekter",
    option3: "Til å lagre permanente databaseverdier",
  },
  {
    id: 10,
    question: "Hva er JSX i React?",
    option1: "Et bibliotek for styling",
    option2:
      "En syntaks som lar deg skrive HTML-lignende kode inne i JavaScript",
    option3: "Et verktøy for å kjøre servere",
  },
];
