import { MultipleChoice } from "./types";

export const Tasks: MultipleChoice[] = [
  {
    id: 1,
    question: "Hva er de fem ulike “Design Thinking”-metodene?",
    options: [
      "Empati, definere, idéer, prototype, teste",
      "Definere, empati, idéer, designe, teste",
      "Snakke, tenke, dele, tegne, løse",
    ],
    correctIndex: 0,
  },
  {
    id: 2,
    question:
      "Hva kalles teksten man legger på bilde-elementer i HTML for at brukere skal få med seg hva bildet er om de ikke kan se det?",
    options: ["Bildetekst", "alt-tekst", "Universaltekst"],
    correctIndex: 1,
  },
  {
    id: 3,
    question: "Hva blir logget ut her?",
    options: [
      `["Juice", "Smoothie", "Redbull", "Kaffe", "Eple", "Appelsin", "Pære", "Mango"]`,
      `["Juice", "Smoothie", "Redbull", "Kaffe"]`,
      `["Eple", "Appelsin", "Pære", "Mango", "Juice", "Smoothie", "Redbull", "Kaffe"]`,
    ],
    image: "/JavaScript-oppgaver/oppg1.png",
    imageWidth: 734,
    imageHeight: 212,
    correctIndex: 0,
  },
  {
    id: 4,
    question: "Hva blir logget ut her?",
    options: [
      `hello, world, parent, box`,
      `sun, rain`,
      `hello, world, parent, box, sun, rain`,
    ],
    image: "/Javascript-oppgaver/oppg2.png",
    imageWidth: 505,
    imageHeight: 193,
    correctIndex: 2,
  },
  {
    id: 5,
    question: "Hva blir logget ut her?",
    options: [
      `Log 1: Gratulerer Allen du er gammel nok til å ta deg en drink. Log 2: Allen! Du kan jo også kjøre!`,
      `Log 1: Gratulerer Stella du er gammel nok til å ta deg en drink. Log 2: Stella! Du kan jo også kjøre!`,
      `Log 1: Gratulerer Stella du er gammel nok til å ta deg en drink. Log 2: Sorry Stella, men du kan ikke kjøre..`,
    ],
    image: "/JavaScript-oppgaver/oppg3.png",
    imageWidth: 912,
    imageHeight: 445,
    correctIndex: 1,
  },
  {
    id: 6,
    question: "Hva brukes props til i React?",
    options: [
      "Til å lagre interne tilstander i en komponent",
      "Til å sende data fra en forelder til en barnekomponent",
      "Til å style komponenter",
    ],
    correctIndex: 1,
  },
  {
    id: 7,
    question: "Hva er en viktig fordel med Virtual DOM i React?",
    options: [
      "At all HTML kodes manuelt uten JavaScript",
      "At endringer på siden skjer raskere fordi kun nødvendige deler av DOM oppdateres",
      "At man slipper å bruke CSS",
    ],
    correctIndex: 1,
  },
  {
    id: 8,
    question: "Hva er en komponent i React?",
    options: [
      "En funksjon eller klasse som returnerer UI og kan gjenbrukes",
      "En ferdig CSS-fil for layout",
      "En server som kjører JavaScript",
    ],
    correctIndex: 0,
  },
  {
    id: 9,
    question: "Hva brukes state til i React?",
    options: [
      "Til å lagre og oppdatere data som kan endres over tid i en komponent",
      "Til å sende data mellom forskjellige prosjekter",
      "Til å lagre permanente databaseverdier",
    ],
    correctIndex: 0,
  },
  {
    id: 10,
    question: "Hva er JSX i React?",
    options: [
      "Et bibliotek for styling",
      "En syntaks som lar deg skrive HTML-lignende kode inne i JavaScript",
      "Et verktøy for å kjøre servere",
    ],
    correctIndex: 1,
  },
];
