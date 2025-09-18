export type MultipleChoice = {
  id: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  image?: string;
  correct: "option1" | "option2" | "option3";
};

export const Tasks: MultipleChoice[] = [
  {
    id: 1,
    question: "Hva er de fem ulike “Design Thinking”-metodene?",
    option1: "Empati, definere, idéer, prototype, teste",
    option2: "Definere, empati, idéer, designe, teste",
    option3: "Snakke, tenke, dele, tegne, løse",
    correct: "option1"

  },
  {
    id: 2,
    question:
      "Hva kalles teksten man legger på bilde-elementer i HTML for at brukere skal få med seg hva bildet er om de ikke kan se det?",
    option1: "Bildetekst",
    option2: "alt-tekst",
    option3: "Universaltekst",
    correct: "option1"
  },
  {
    id: 3,
    question: "Hva blir logget ut her?",
    option1: `["Eple", "Appelsin", "Pære", "Mango", "Bolle", "Kake", "Vaffel", "Croissant", "Doughnut"]`,
    option2: `["Juice", "Smoothie", "Redbull", "Kaffe"]`,
    option3: `["Eple", "Appelsin", "Pære", "Mango", "Juice", "Smoothie", "Redbull", "Kaffe"]`,
    image: "/JavaScript-oppgaver/oppg1.png",
    correct: "option1"
  },
  {
    id: 4,
    question: "Hva blir logget ut her?",
    option1: `hello, world, parent, box`,
    option2: `sun, rain`,
    option3: `hello, world, parent, box, sun, rain`,
    image: "/Javascript-oppgaver/oppg2.png",
    correct: "option1"
  },
  {
    id: 5,
    question: "Hva blir logget ut her?",
    option1: `Log1: Gratulerer Allen du er gammel nok til å ta deg en drink. Log2: Allen! Du kan jo også kjøre!`,
    option2: `Log1: Gratulerer Violet du er gammel nok til å ta deg en drink. Log2: Sorry Violet, men du kan ikke kjøre..`,
    option3: `Gratulerer Stella du er gammel nok til å ta deg en drink. Log2: Sorry Stella, men du kan ikke kjøre..`,
    image: "/JavaScript-oppgaver/oppg3.png",
    correct: "option1"
  },
  {
    id: 6,
    question: "Hva brukes props til i React?",
    option1: "Til å lagre interne tilstander i en komponent",
    option2: "Til å sende data fra en forelder til en barnekomponent",
    option3: "Til å style komponenter",
    correct: "option1"
  },
  {
    id: 7,
    question: "Hva er en viktig fordel med Virtual DOM i React?",
    option1: "At all HTML kodes manuelt uten JavaScript",
    option2:
      "At endringer på siden skjer raskere fordi kun nødvendige deler av DOM oppdateres",
    option3: "At man slipper å bruke CSS",
    correct: "option2"
  },
  {
    id: 8,
    question: "Hva er en komponent i React?",
    option1: "En funksjon eller klasse som returnerer UI og kan gjenbrukes",
    option2: "En ferdig CSS-fil for layout",
    option3: "En server som kjører JavaScript",
    correct: "option1"
  },
  {
    id: 9,
    question: "Hva brukes state til i React?",
    option1:
      "Til å lagre og oppdatere data som kan endres over tid i en komponent",
    option2: "Til å sende data mellom forskjellige prosjekter",
    option3: "Til å lagre permanente databaseverdier",
    correct: "option1"
  },
  {
    id: 10,
    question: "Hva er JSX i React?",
    option1: "Et bibliotek for styling",
    option2:
      "En syntaks som lar deg skrive HTML-lignende kode inne i JavaScript",
    option3: "Et verktøy for å kjøre servere",
    correct: "option1"
  },
];
